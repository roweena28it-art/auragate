import { Icon } from "./Icons";

function Status({ status }) {
  return <span className={`status status-${status.toLowerCase()}`}>{status}</span>;
}

export default function DeviceTable({ devices, onSelect }) {
  return (
    <div className="table-scroll">
      <table className="device-table">
        <thead><tr><th>Device</th><th>IP Address</th><th>MAC Address</th><th>Status</th><th>Bandwidth</th><th>Last Seen</th><th></th></tr></thead>
        <tbody>
          {devices.length ? devices.map(d => (
            <tr key={d.id} onClick={() => onSelect(d)}>
              <td><strong>{d.name}</strong></td>
              <td>{d.ip}</td><td className="mono">{d.mac}</td><td><Status status={d.status}/></td>
              <td>{d.download.toFixed(1)} Mbps</td><td>{d.lastSeen}</td>
              <td><Icon name="chevron" size={15}/></td>
            </tr>
          )) : <tr><td colSpan="7" className="empty">No devices match the current filters.</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
