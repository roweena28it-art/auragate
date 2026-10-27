import { Icon } from "./Icons";

const items = [
  ["Dashboard", "dashboard"],
  ["Devices", "devices"],
  ["Bandwidth", "bandwidth"],
  ["Security Alerts", "alerts"],
  ["Settings", "settings"]
];

export default function Sidebar({ page, setPage, open, setOpen }) {
  return (
    <>
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><Icon name="shield" size={19}/></div>
          <div><strong>AuraGate</strong><span>LAN MONITOR</span></div>
        </div>
        <nav>
          {items.map(([label, icon]) => (
            <button key={label} className={page === label ? "nav-item active" : "nav-item"} onClick={() => { setPage(label); setOpen(false); }}>
              <Icon name={icon}/><span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebar-status">
          <span className="status-dot"></span>
          <div><small>System Status</small><strong>Network Online</strong></div>
        </div>
      </aside>
      {open && <button className="sidebar-overlay" aria-label="Close navigation" onClick={() => setOpen(false)} />}
    </>
  );
}
