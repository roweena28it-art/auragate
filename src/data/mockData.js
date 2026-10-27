export const initialDevices = [
  {
    id: 1, name: "Laptop-01", ip: "192.168.1.10", mac: "A4:5E:60:12:8A:91",
    status: "Authorized", download: 18.4, upload: 5.1, total: 42.7,
    firstSeen: "Today, 08:12", lastSeen: "2 min ago",
    activity: ["Normal browsing traffic", "Connected through Wi-Fi", "No security events"]
  },
  {
    id: 2, name: "Phone-02", ip: "192.168.1.11", mac: "8C:85:90:44:2F:71",
    status: "Authorized", download: 7.2, upload: 1.8, total: 16.4,
    firstSeen: "Today, 08:21", lastSeen: "1 min ago",
    activity: ["Mobile sync completed", "Low bandwidth usage"]
  },
  {
    id: 3, name: "Desktop-03", ip: "192.168.1.12", mac: "34:17:EB:72:11:04",
    status: "Authorized", download: 11.8, upload: 3.4, total: 28.2,
    firstSeen: "Today, 08:04", lastSeen: "4 min ago",
    activity: ["Development traffic", "Repository access detected"]
  },
  {
    id: 4, name: "Tablet-01", ip: "192.168.1.13", mac: "90:09:D0:44:8A:10",
    status: "Authorized", download: 4.8, upload: 1.2, total: 9.8,
    firstSeen: "Today, 08:31", lastSeen: "3 min ago",
    activity: ["Web browsing", "Media traffic within normal range"]
  },
  {
    id: 5, name: "Laptop-03", ip: "192.168.1.14", mac: "BC:92:6B:31:7F:22",
    status: "Authorized", download: 21.6, upload: 6.9, total: 51.3,
    firstSeen: "Today, 07:58", lastSeen: "1 min ago",
    activity: ["Higher than average download", "Video conference detected"]
  },
  {
    id: 6, name: "Printer-01", ip: "192.168.1.15", mac: "18:65:90:7A:20:42",
    status: "Authorized", download: 0.4, upload: 0.2, total: 1.1,
    firstSeen: "Today, 08:03", lastSeen: "7 min ago",
    activity: ["Idle", "Last print job completed"]
  },
  {
    id: 7, name: "Lab-PC-04", ip: "192.168.1.16", mac: "60:45:BD:11:52:38",
    status: "Authorized", download: 9.3, upload: 2.7, total: 23.4,
    firstSeen: "Today, 08:15", lastSeen: "5 min ago",
    activity: ["Lab application traffic", "Normal DNS activity"]
  },
  {
    id: 8, name: "Unknown-01", ip: "192.168.1.17", mac: "F0:18:98:AA:22:19",
    status: "Unauthorized", download: 12.8, upload: 4.4, total: 31.9,
    firstSeen: "Today, 09:02", lastSeen: "30 sec ago",
    activity: ["New device detected", "Unrecognized MAC address", "Elevated download traffic"]
  },
  {
    id: 9, name: "Camera-01", ip: "192.168.1.18", mac: "B8:27:EB:91:20:11",
    status: "Authorized", download: 2.1, upload: 3.1, total: 12.7,
    firstSeen: "Today, 08:09", lastSeen: "2 min ago",
    activity: ["Continuous local stream", "Expected upload pattern"]
  },
  {
    id: 10, name: "Unknown-02", ip: "192.168.1.22", mac: "7C:8B:CA:19:31:88",
    status: "Unauthorized", download: 8.6, upload: 3.2, total: 20.6,
    firstSeen: "Today, 08:54", lastSeen: "8 min ago",
    activity: ["Unknown device joined", "Authentication not recognized"]
  },
  {
    id: 11, name: "Phone-04", ip: "192.168.1.24", mac: "54:27:1E:63:45:90",
    status: "Unauthorized", download: 5.9, upload: 1.6, total: 13.8,
    firstSeen: "Today, 08:47", lastSeen: "6 min ago",
    activity: ["Unknown mobile device", "Repeated connection attempt"]
  },
  {
    id: 12, name: "Lab-PC-07", ip: "192.168.1.27", mac: "D8:3A:DD:44:9B:62",
    status: "Blocked", download: 0, upload: 0, total: 0,
    firstSeen: "Yesterday, 14:10", lastSeen: "Blocked",
    activity: ["Device blocked by administrator", "No current traffic"]
  }
];

export const bandwidthData = [
  { time: "08:00", download: 20, upload: 8 },
  { time: "09:00", download: 35, upload: 12 },
  { time: "10:00", download: 28, upload: 10 },
  { time: "11:00", download: 50, upload: 20 },
  { time: "12:00", download: 42, upload: 15 },
  { time: "13:00", download: 65, upload: 25 },
  { time: "14:00", download: 58, upload: 21 }
];

export const trafficData = [
  { name: "Web Browsing", value: 35 },
  { name: "Video", value: 28 },
  { name: "Downloads", value: 20 },
  { name: "Other", value: 17 }
];

export const initialAlerts = [
  { id: 1, type: "Unauthorized", title: "Unauthorized device detected", description: "Unrecognized MAC address connected to the LAN.", device: "Unknown-01 · 192.168.1.17", time: "2 minutes ago", severity: "High" },
  { id: 2, type: "Network", title: "New device joined network", description: "A previously unseen device was discovered.", device: "Unknown-02 · 192.168.1.22", time: "8 minutes ago", severity: "Medium" },
  { id: 3, type: "Bandwidth", title: "Unusual bandwidth usage", description: "Download activity exceeded the normal device range.", device: "Laptop-03 · 192.168.1.14", time: "15 minutes ago", severity: "Medium" },
  { id: 4, type: "Network", title: "Multiple connection attempts", description: "Repeated connection attempts were recorded.", device: "Phone-04 · 192.168.1.24", time: "22 minutes ago", severity: "Medium" },
  { id: 5, type: "Bandwidth", title: "High bandwidth usage", description: "Traffic briefly crossed the monitoring threshold.", device: "Laptop-01 · 192.168.1.10", time: "31 minutes ago", severity: "Low" },
  { id: 6, type: "Unauthorized", title: "Unknown device activity", description: "Traffic observed from an unauthorized endpoint.", device: "Unknown-02 · 192.168.1.22", time: "42 minutes ago", severity: "High" }
];

export const defaultSettings = {
  gateway: "192.168.1.1",
  localNetwork: "192.168.1.0/24",
  interface: "Wi-Fi",
  monitoringEnabled: true,
  refreshInterval: "10 seconds",
  discovery: true,
  unauthorizedAlerts: true,
  bandwidthAlerts: true,
  networkAlerts: true,
  theme: "Light Theme"
};
