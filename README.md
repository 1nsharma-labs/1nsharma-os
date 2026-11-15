# 🌐 1nsharma-OS — Universal Topic-to-App & Interactive Skill Engine

<p align="center">
  <img src="https://img.shields.io/badge/Engine-Universal%20Topic--to--App-00f0ff?style=for-the-badge" alt="Topic to App">
  <img src="https://img.shields.io/badge/Industries-8%20Interactive%20Simulators-ff8b3d?style=for-the-badge" alt="8 Simulators">
  <img src="https://img.shields.io/badge/Platforms-Web%20.io%20%7C%20APK%20%7C%20CLI-10b981?style=for-the-badge" alt="Multi Platform">
  <img src="https://img.shields.io/badge/MCP-Native%20Stdio-a855f7?style=for-the-badge" alt="MCP Server">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="MIT License">
  <img src="https://img.shields.io/badge/Origin-Kanpur%2C%20India-ff9933?style=for-the-badge" alt="Made in India">
</p>

<p align="center">
  <strong>The open-source engine that compiles ANY subject in the world (AI, Cybersecurity, Quant Finance, Robotics, Drone Firmware) into an interactive zero-login web simulator (.io) and mobile Android package (.apk).</strong>
</p>

<p align="center">
  <a href="https://1nsharma-labs.github.io/1nsharma-os/"><strong>🌐 Live Interactive Web Simulator (Zero Login)</strong></a> &bull;
  <a href="#quickstart"><strong>Quickstart</strong></a> &bull;
  <a href="#supported-multi-industry-topics"><strong>Supported Topics</strong></a> &bull;
  <a href="#sponsorship--monetization"><strong>Sponsorship</strong></a>
</p>

---

> [!NOTE]
> **Live Auto-Sponsorship Slot Available:**
> Reach 100,000+ developers, builders & students worldwide across all interactive simulators.
> **Book Slot:** Email [amitsharma9976@gmail.com](mailto:amitsharma9976@gmail.com) | Direct UPI: `6393741171@upi`

---

## 🏛️ The Vision: Product-Led Growth for Everything

Instead of writing passive tutorials or bloated video courses, **1nsharma-OS** treats every skill and domain as **executable software**:

1. **Zero-Login Interactive Web Apps (.io):** Instant hands-on practice in the browser without sign-up friction (GitDiagram style).
2. **Instant Mobile APK (.apk):** Every topic compiles with PWA and Capacitor configs ready for Android releases.
3. **One-Command Terminal Magic (`npx 1nsharma-os`):** Zero-dependency CLI tools executable anywhere in milliseconds.
4. **Built-in Sponsorship & Watermark:** Every exported artifact spreads the ecosystem with automatic sponsor monetization.

---

## 📚 Supported Multi-Industry Simulators (Preloaded)

| Icon | Topic ID | Industry | Description & Core Capability |
|:---:|:---|:---|:---|
| 🤖 | `ai-agents` | **Artificial Intelligence** | Multi-agent swarms, event blackboards, and autonomous task DAGs (Powered by Mowglai & Hive). |
| 📱 | `mobile-ai-droid` | **Mobile & QA Automation** | Natural language Android phone control with zero-latency ADB tap/swipe (DroidArmor). |
| 🗺️ | `system-graph-3d` | **Architecture & DevOps** | Zero-token 3D AST knowledge graph of codebases and APIs (SlashGraph). |
| 🛡️ | `ethical-hacking` | **Cybersecurity** | Binary exploitation, memory corruption, reverse engineering, and sub-10ms secret leak blocking. |
| 📈 | `quant-finance` | **FinTech & Markets** | High-frequency microstructure, Black-Scholes Greeks, NSE/BSE tick simulation, and UPI 2.0. |
| 🐧 | `linux-mastery` | **Systems Engineering** | Kernel internals, eBPF telemetry, sub-2ms terminal error interception, and zombie port killer. |
| 🏎️ | `robotics-ros2` | **Robotics & Hardware** | LiDAR point clouds, 2D/3D SLAM mapping, trajectory generation, and micro-ROS telemetry. |
| 🛸 | `drone-avionics` | **Aerospace & Embedded** | PX4 autopilot firmware, Mavlink telemetry streams, computer vision tracking, and optical flow. |

---

## ⚡ Quickstart

### Instant Zero-Install CLI (`npx`)

```bash
# Check architecture & preloaded topics
npx 1nsharma-os status

# List all available interactive skills
npx 1nsharma-os list

# Run interactive simulation lab in terminal
npx 1nsharma-os run ai-agents
npx 1nsharma-os run mobile-ai-droid

# Compile any topic into standalone web app & PWA
npx 1nsharma-os compile quant-finance ./dist
```

### Local Setup & Testing

```bash
git clone https://github.com/1nsharma-labs/1nsharma-os.git
cd 1nsharma-os

# Run unit tests
npm test

# Launch Model Context Protocol (MCP) server
npm run mcp
```

---

## 🔌 Model Context Protocol (MCP)

Connect 1nsharma-OS directly to Cursor, Claude Desktop, or Antigravity:

```json
{
  "mcpServers": {
    "1nsharma-os": {
      "command": "node",
      "args": ["/path/to/1nsharma-os/core/src/mcp/server.js"]
    }
  }
}
```

Exposed Tools:
- `os_list_topics`: Discover all available skills and categories.
- `os_generate_app`: Compile any topic into standalone HTML and PWA manifest.
- `os_simulate_lab`: Run verified simulation logic with zero errors.
- `os_status`: Inspect engine version and founder details.

---

## 💼 Sponsorship, Support & Founder

Built by **Amit Sharma (@1nsharma)** from **Kanpur, India**.

- **Personal Email:** [amitsharma9976@gmail.com](mailto:amitsharma9976@gmail.com)
- **Direct UPI & Bank Transfer:** `6393741171@upi` &bull; PhonePe / Google Pay / Paytm: `6393741171`
- **Global Sponsorship:** [polar.sh/1nsharma-labs](https://polar.sh/1nsharma-labs) &bull; [GitHub Sponsors](https://github.com/sponsors/1nsharma)
- **Organization:** [github.com/1nsharma-labs](https://github.com/1nsharma-labs)

---

## 📄 License

Open-source under the [MIT License](LICENSE).
