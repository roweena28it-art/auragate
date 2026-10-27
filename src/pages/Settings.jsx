import Section from "../components/Section";

function Toggle({ checked, onChange }) {
  return <button type="button" className={`toggle ${checked ? "on" : ""}`} onClick={() => onChange(!checked)} aria-pressed={checked}><span></span></button>;
}

export default function Settings({ settings, setSettings }) {
  const update = (key, value) => setSettings(s => ({...s, [key]: value}));
  return <div className="page">
    <div className="page-intro"><div><h2>System settings</h2><p>Configure the local monitoring demo and alert preferences.</p></div></div>
    <div className="settings-grid">
      <Section title="Network Configuration" subtitle="Connection details used by the monitor">
        <div className="form-grid">
          <label>Gateway<input value={settings.gateway} onChange={e=>update("gateway",e.target.value)}/></label>
          <label>Local Network<input value={settings.localNetwork} onChange={e=>update("localNetwork",e.target.value)}/></label>
          <label>Monitoring Interface<select value={settings.interface} onChange={e=>update("interface",e.target.value)}><option>Wi-Fi</option><option>Ethernet</option><option>LAN Adapter</option></select></label>
        </div>
      </Section>
      <Section title="Monitoring Settings" subtitle="Control discovery and refresh behavior">
        <div className="setting-list">
          <div><div><strong>Monitoring Enabled</strong><span>Collect local network activity.</span></div><Toggle checked={settings.monitoringEnabled} onChange={v=>update("monitoringEnabled",v)}/></div>
          <div><div><strong>Refresh Interval</strong><span>How often the dashboard updates.</span></div><select value={settings.refreshInterval} onChange={e=>update("refreshInterval",e.target.value)}><option>5 seconds</option><option>10 seconds</option><option>30 seconds</option><option>60 seconds</option></select></div>
          <div><div><strong>Device Discovery</strong><span>Look for new LAN endpoints.</span></div><Toggle checked={settings.discovery} onChange={v=>update("discovery",v)}/></div>
        </div>
      </Section>
      <Section title="Alert Preferences" subtitle="Choose which event categories appear">
        <div className="setting-list">
          {[
            ["Unauthorized Device Alerts","Notify when an unknown endpoint appears.","unauthorizedAlerts"],
            ["Bandwidth Alerts","Notify when usage crosses a threshold.","bandwidthAlerts"],
            ["Network Alerts","Notify about connection events.","networkAlerts"]
          ].map(([title,desc,key])=><div key={key}><div><strong>{title}</strong><span>{desc}</span></div><Toggle checked={settings[key]} onChange={v=>update(key,v)}/></div>)}
        </div>
      </Section>
      <Section title="Theme" subtitle="Appearance for the administration workspace">
        <div className="theme-choice"><span className="theme-preview"></span><div><strong>Light Theme</strong><span>Ivory workspace with the AuraGate navy palette.</span></div><span className="selected-check">✓</span></div>
      </Section>
    </div>
  </div>;
}
