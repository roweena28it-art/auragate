import Section from "../components/Section";
import StatStrip from "../components/StatStrip";
import BandwidthChart from "../components/BandwidthChart";

export default function Bandwidth({ devices, data }) {
  const currentDownload = devices.reduce((s,d)=>s+d.download,0);
  const currentUpload = devices.reduce((s,d)=>s+d.upload,0);
  return <div className="page">
    <div className="page-intro"><div><h2>Bandwidth monitoring</h2><p>Review throughput trends and device-level traffic consumption.</p></div></div>
    <StatStrip stats={[
      {label:"Total Bandwidth",value:"248.6 GB"},
      {label:"Current Download",value:`${currentDownload.toFixed(1)} Mbps`},
      {label:"Current Upload",value:`${currentUpload.toFixed(1)} Mbps`},
      {label:"Peak Usage",value:"65 Mbps"},
      {label:"Average Usage",value:"42 Mbps"}
    ]}/>
    <Section title="Bandwidth Overview" subtitle="Download and upload throughput by hour">
      <BandwidthChart data={data}/>
    </Section>
    <Section title="Device Usage" subtitle="Current traffic by endpoint">
      <div className="usage-table">
        {devices.filter(d=>d.status!=="Blocked").sort((a,b)=>b.download-a.download).map(d => {
          const usage = Math.min(100, (d.download / 25) * 100);
          return <div className="usage-row" key={d.id}>
            <strong>{d.name}</strong><span>{d.download.toFixed(1)} Mbps</span><span>{d.upload.toFixed(1)} Mbps</span><div className="usage-bar"><i style={{width:`${usage}%`}}></i></div><strong>{d.total.toFixed(1)} GB</strong>
          </div>
        })}
      </div>
    </Section>
  </div>;
}
