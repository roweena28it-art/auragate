import { Icon } from "./Icons";

export default function DeviceModal({ device, onClose, onAuthorize, onBlock }) {
  if (!device) return null;
  return (
    <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <section className="modal" role="dialog" aria-modal="true">
        <div className="modal-head">
          <div><div className="eyebrow">DEVICE DETAILS</div><h2>{device.name}</h2></div>
          <button className="icon-btn" onClick={onClose}><Icon name="close"/></button>
        </div>
        <div className="detail-grid">
          <div><span>IP Address</span><strong>{device.ip}</strong></div>
          <div><span>MAC Address</span><strong className="mono">{device.mac}</strong></div>
          <div><span>Status</span><strong>{device.status}</strong></div>
          <div><span>Current Bandwidth</span><strong>{(device.download + device.upload).toFixed(1)} Mbps</strong></div>
          <div><span>Total Bandwidth</span><strong>{device.total.toFixed(1)} GB</strong></div>
          <div><span>First Seen</span><strong>{device.firstSeen}</strong></div>
          <div><span>Last Seen</span><strong>{device.lastSeen}</strong></div>
        </div>
        <div className="activity">
          <h3>Recent Activity</h3>
          {device.activity.map((x, i) => <div key={i} className="activity-row"><span>{x}</span></div>)}
        </div>
        <div className="modal-actions">
          <button className="btn secondary" onClick={() => onAuthorize(device)} disabled={device.status === "Authorized"}>Mark as Authorized</button>
          <button className="btn danger" onClick={() => onBlock(device)} disabled={device.status === "Blocked"}>Block Device</button>
        </div>
      </section>
    </div>
  );
}
