export default function NetworkHealth({ devices }) {
  return (
    <div className="health-list">
      <div><span>Network Status</span><strong className="healthy">Online</strong></div>
      <div><span>Gateway</span><strong>192.168.1.1</strong></div>
      <div><span>Local Network</span><strong>192.168.1.0/24</strong></div>
      <div><span>Active Connections</span><strong>{devices.filter(d => d.status !== "Blocked").length}</strong></div>
      <div><span>Average Latency</span><strong>18 ms</strong></div>
    </div>
  );
}
