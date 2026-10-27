import Section from "../components/Section";
import StatStrip from "../components/StatStrip";
import BandwidthChart from "../components/BandwidthChart";
import DeviceTable from "../components/DeviceTable";
import AlertList from "../components/AlertList";
import NetworkHealth from "../components/NetworkHealth";
import TrafficChart from "../components/TrafficChart";

export default function Dashboard({ devices, alerts, bandwidth, traffic, onSelect }) {
  const active = devices.filter(d => d.status !== "Blocked");
  const authorized = devices.filter(d => d.status === "Authorized");
  const unauthorized = devices.filter(d => d.status === "Unauthorized");
  return (
    <div className="page">
      <div className="page-intro"><div><h2>Network overview</h2><p>Monitor connected endpoints and recent network activity.</p></div><span className="updated">Updated just now</span></div>
      <StatStrip stats={[
        { label: "Connected Devices", value: active.length },
        { label: "Authorized Devices", value: authorized.length },
        { label: "Unauthorized Devices", value: unauthorized.length, tone: "warning-number" },
        { label: "Network Usage", value: "68%" }
      ]}/>
      <Section title="Bandwidth Overview" subtitle="Network throughput over the current monitoring period">
        <BandwidthChart data={bandwidth}/>
      </Section>
      <Section title="Connected Devices" subtitle={`${active.length} active endpoints detected`} action={<span className="section-link">View all devices</span>}>
        <DeviceTable devices={devices.slice(0, 8)} onSelect={onSelect}/>
      </Section>
      <div className="two-col">
        <Section title="Security Alerts" subtitle="Recent network events"><AlertList alerts={alerts.slice(0, 4)} compact/></Section>
        <Section title="Network Health" subtitle="Current LAN status"><NetworkHealth devices={devices}/></Section>
      </div>
      <Section title="Traffic Distribution" subtitle="Estimated usage by traffic category">
        <TrafficChart data={traffic}/>
      </Section>
    </div>
  );
}
