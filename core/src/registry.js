/**
 * 1nsharma-OS Master Topic Registry
 * 
 * Defines the universal taxonomy of interactive skills and simulators.
 * Each topic automatically compiles into an interactive zero-login web app (.io)
 * and mobile Android package (.apk).
 */

export const TOPIC_REGISTRY = [
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents & Virtual Coworkers',
    category: 'Artificial Intelligence',
    icon: '🤖',
    badge: 'Trending #1',
    description: 'Design, test, and deploy multi-agent cognitive swarms, event blackboards, and autonomous task DAGs.',
    sampleCommands: ['spawn agent --role planner', 'mesh connect --protocol event-bus', 'audit consensus'],
    interactiveSimulator: {
      type: 'agent-swarm',
      nodes: ['User Goal', 'AMIX-Alpha', 'AMIX-Synthesizer', 'Consensus']
    },
    codeSnippet: `// 1nsharma-OS Autonomous Agent Swarm\nimport { Swarm } from '@1nsharma-labs/hivemesh';\nconst swarm = new Swarm({ consensus: 'strict' });\nawait swarm.dispatch('Build Kirana Ledger');`
  },
  {
    id: 'mobile-ai-droid',
    title: 'Autonomous Mobile AI & ADB Control',
    category: 'Mobile & QA Automation',
    icon: '📱',
    badge: 'Viral Reel-Magnet',
    description: 'Control Android phones via natural language with sub-5ms ADB tap/swipe, XML hierarchy parsing, and self-healing test automation.',
    sampleCommands: ['adb devices -l', 'droid click "WhatsApp"', 'droid type "Namaste"'],
    interactiveSimulator: {
      type: 'phone-screen',
      screenState: 'Android Home Screen -> WhatsApp -> Auto Reply Sent'
    },
    codeSnippet: `// DroidArmor Zero-Latency Automation\nimport { DroidAgent } from '@1nsharma-labs/droidarmor';\nconst phone = new DroidAgent();\nawait phone.tapText('Settings');`
  },
  {
    id: 'system-graph-3d',
    title: '3D Codebase & System Architecture Graph',
    category: 'DevOps & Architecture',
    icon: '🗺️',
    badge: '3-Second Visual Shock',
    description: 'Convert any GitHub repository or API surface into an interactive 3D knowledge map without burning thousands of LLM tokens.',
    sampleCommands: ['slashgraph parse https://github.com/torvalds/linux', 'slashgraph export --3d'],
    interactiveSimulator: {
      type: '3d-graph',
      nodesCount: 142,
      astRoutes: ['/api/v1/auth', '/api/v1/billing', '/db/postgres']
    },
    codeSnippet: `// SlashGraph Zero-Token AST Mapper\nimport { GraphBuilder } from '@1nsharma-labs/slashgraph';\nconst graph = await GraphBuilder.fromRepo('torvalds/linux');\nconsole.log(graph.renderRoutes());`
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking & Zero-Day AppSec',
    category: 'Cybersecurity',
    icon: '🛡️',
    badge: 'Forbidden & Hacky Vibe',
    description: 'Master binary exploitation, memory corruption, reverse engineering, and sub-10ms API secret leak prevention.',
    sampleCommands: ['scan --ports 1-65535', 'disasm --x86_64', 'fuzz --payload-overflow'],
    interactiveSimulator: {
      type: 'terminal-buffer',
      vulnFound: 'CVE-2026-X: Stack Canary Bypassed in buffer_alloc()'
    },
    codeSnippet: `// 1nsharma-OS Security Vulnerability Prover\nimport { SecretArmor } from '@1nsharma-labs/secretarmor';\nconst audit = SecretArmor.scanBuffer(gitCommitBlob);\nassert(audit.leaks.length === 0);`
  },
  {
    id: 'quant-finance',
    title: 'Quantitative Finance & Indian F&O Trading',
    category: 'FinTech & Capital Markets',
    icon: '📈',
    badge: 'High Value',
    description: 'High-frequency market microstructure, Black-Scholes Greeks, NSE/BSE tick simulation, and UPI 2.0 FinTech architecture.',
    sampleCommands: ['quant simulate --ticker NIFTY50 --strategy straddle', 'greeks compute --delta 0.5'],
    interactiveSimulator: {
      type: 'candlestick-chart',
      pnl: '+₹1,42,850',
      sharpeRatio: 2.84
    },
    codeSnippet: `// Quantitative Strategy Engine\nfunction calculateDelta(spot, strike, vol, t) {\n  return normCDF((Math.log(spot / strike) + (0.05 + vol*vol/2)*t) / (vol * Math.sqrt(t)));\n}`
  },
  {
    id: 'linux-mastery',
    title: 'Linux Kernel & Zombie Port Interceptor',
    category: 'Systems Engineering',
    icon: '🐧',
    badge: 'Developer Essential',
    description: 'Kernel internals, eBPF telemetry, sub-2ms terminal error interception, and automatic zombie port (EADDRINUSE 3000) execution killer.',
    sampleCommands: ['devdaemon intercept', 'kill-zombie 3000', 'ebpf trace syscalls'],
    interactiveSimulator: {
      type: 'linux-shell',
      status: 'Intercepted EADDRINUSE: Process 4128 on port 3000 terminated.'
    },
    codeSnippet: `// DevDaemon Zombie Port Killer\nimport { PortManager } from '@1nsharma-labs/devdaemon';\nawait PortManager.killPort(3000);\nconsole.log('Port 3000 liberated!');`
  },
  {
    id: 'robotics-ros2',
    title: 'Autonomous Mobile Robots (ROS 2 & SLAM)',
    category: 'Hardware & Robotics',
    icon: '🏎️',
    badge: 'Next-Gen Hardware',
    description: 'Simulate LiDAR point clouds, 2D/3D SLAM mapping, trajectory generation, and micro-ROS microcontroller telemetry.',
    sampleCommands: ['ros2 launch slam_toolbox online_async.launch.py', 'nav2 navigate_to_pose'],
    interactiveSimulator: {
      type: 'lidar-canvas',
      obstaclesDetected: 4,
      mapResolution: '0.05m/pixel'
    },
    codeSnippet: `// ROS 2 Nav2 Waypoint Dispatcher\nclass NavGoal {\n  constructor(x, y, theta) { this.x = x; this.y = y; this.theta = theta; }\n}`
  },
  {
    id: 'drone-avionics',
    title: 'Drone Avionics & PX4 Flight Control',
    category: 'Aerospace & Embedded',
    icon: '🛸',
    badge: 'Deep Tech',
    description: 'PX4 autopilot firmware, Mavlink telemetry streams, computer vision target tracking, and GPS-denied optical flow guidance.',
    sampleCommands: ['mavlink stream --heartbeat 10hz', 'px4 takeoff --altitude 15m'],
    interactiveSimulator: {
      type: 'flight-hud',
      altitude: '18.4m',
      battery: '94%',
      gpsFix: 'RTK Fix (3D)'
    },
    codeSnippet: `// Mavlink Telemetry Packet\nexport function buildTakeoffMsg(targetAlt) {\n  return { command: 22, param7: targetAlt, frame: 3 };\n}`
  }
];

export function getTopicById(id) {
  return TOPIC_REGISTRY.find(t => t.id === id) || null;
}

export function listAllTopics() {
  return TOPIC_REGISTRY.map(t => ({
    id: t.id,
    title: t.title,
    category: t.category,
    icon: t.icon,
    badge: t.badge
  }));
}
