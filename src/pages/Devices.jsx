import { useMemo, useState } from "react";
import StatStrip from "../components/StatStrip";
import Section from "../components/Section";
import DeviceTable from "../components/DeviceTable";

export default function Devices({ devices, onSelect, globalSearch }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const effectiveQuery = query || globalSearch;
  const filtered = useMemo(() => devices.filter(d => {
    const q = effectiveQuery.toLowerCase();
    const matchesSearch = !q || [d.name, d.ip, d.mac].some(v => v.toLowerCase().includes(q));
    const matchesStatus = status === "All" || d.status === status;
    return matchesSearch && matchesStatus;
  }), [devices, effectiveQuery, status]);
  const stats = [
    { label: "Total Devices", value: filtered.length },
    { label: "Authorized", value: filtered.filter(d => d.status === "Authorized").length },
    { label: "Unauthorized", value: filtered.filter(d => d.status === "Unauthorized").length, tone: "warning-number" },
    { label: "Blocked", value: filtered.filter(d => d.status === "Blocked").length }
  ];
  return <div className="page">
    <div className="page-intro"><div><h2>Device inventory</h2><p>Search and review every endpoint observed on the local network.</p></div></div>
    <StatStrip stats={stats}/>
    <Section title="Devices" subtitle={`${filtered.length} result${filtered.length === 1 ? "" : "s"}`}>
      <div className="filters">
        <label className="local-search"><span>Search</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Name, IP or MAC address"/></label>
        <label className="select-control"><span>Status</span><select value={status} onChange={e => setStatus(e.target.value)}><option>All</option><option>Authorized</option><option>Unauthorized</option><option>Blocked</option></select></label>
        {(query || status !== "All") && <button className="clear-btn" onClick={() => {setQuery(""); setStatus("All")}}>Clear filters</button>}
      </div>
      <DeviceTable devices={filtered} onSelect={onSelect}/>
    </Section>
  </div>;
}
