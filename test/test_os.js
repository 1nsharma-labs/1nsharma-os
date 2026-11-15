/**
 * Automated Test Suite for 1nsharma-OS
 */

import assert from 'node:assert';
import { describe, it } from 'node:test';
import { TOPIC_REGISTRY, getTopicById, listAllTopics } from '../core/src/registry.js';
import { TopicCompiler } from '../core/src/compiler.js';
import { OsMcpServer } from '../core/src/mcp/server.js';

describe('1nsharma-OS Universal Registry', () => {
  it('should contain 8 multi-industry preloaded topics', () => {
    assert.strictEqual(TOPIC_REGISTRY.length, 8);
  });

  it('should retrieve topic by ID', () => {
    const topic = getTopicById('ai-agents');
    assert.ok(topic);
    assert.strictEqual(topic.category, 'Artificial Intelligence');
  });

  it('should list all topic summaries', () => {
    const list = listAllTopics();
    assert.strictEqual(list.length, 8);
    assert.ok(list[0].id);
    assert.ok(list[0].title);
  });
});

describe('1nsharma-OS Topic-to-App Compiler', () => {
  const compiler = new TopicCompiler();

  it('should compile topic to standalone HTML with interactive lab', () => {
    const html = compiler.compileToHtml('mobile-ai-droid');
    assert.ok(html.includes('<!DOCTYPE html>'));
    assert.ok(html.includes('Autonomous Mobile AI & ADB Control'));
    assert.ok(html.includes('1nsharma-OS'));
    assert.ok(html.includes('amitsharma9976@gmail.com'));
    assert.ok(html.includes('6393741171@upi'));
  });

  it('should generate valid PWA Web App manifest', () => {
    const topic = getTopicById('quant-finance');
    const manifest = compiler.generatePwaManifest(topic);
    assert.strictEqual(manifest.display, 'standalone');
    assert.strictEqual(manifest.theme_color, '#00f0ff');
    assert.ok(manifest.icons.length >= 2);
  });

  it('should generate Android APK packaging configuration', () => {
    const topic = getTopicById('linux-mastery');
    const apkConfig = compiler.generateCapacitorConfig(topic);
    assert.strictEqual(apkConfig.appId, 'com.nsharma.linuxmastery');
    assert.strictEqual(apkConfig.webDir, 'dist');
  });
});

describe('1nsharma-OS Model Context Protocol (MCP) Server', () => {
  const server = new OsMcpServer();

  it('should expose all 4 tools', () => {
    const tools = server.getTools();
    assert.strictEqual(tools.length, 4);
    const names = tools.map(t => t.name);
    assert.ok(names.includes('os_list_topics'));
    assert.ok(names.includes('os_generate_app'));
    assert.ok(names.includes('os_simulate_lab'));
    assert.ok(names.includes('os_status'));
  });

  it('should handle os_simulate_lab tool call', async () => {
    const res = await server.handleCallTool('os_simulate_lab', { topicId: 'ai-agents' });
    const parsed = JSON.parse(res.content[0].text);
    assert.strictEqual(parsed.status, 'verified');
    assert.strictEqual(parsed.invariantsPassed, 4);
  });

  it('should handle os_status tool call', async () => {
    const res = await server.handleCallTool('os_status', {});
    const parsed = JSON.parse(res.content[0].text);
    assert.strictEqual(parsed.version, '1.0.0');
    assert.strictEqual(parsed.contact, 'amitsharma9976@gmail.com');
  });
});
