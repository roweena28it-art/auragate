import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function BandwidthChart({ data }) {
  return (
    <div className="chart-wrap">
      <ResponsiveContainer width="100%" height={310}>
        <AreaChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <defs>
            <linearGradient id="downloadFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B507D" stopOpacity={0.16}/>
              <stop offset="100%" stopColor="#3B507D" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="uploadFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#BEB7A7" stopOpacity={0.18}/>
              <stop offset="100%" stopColor="#BEB7A7" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#E0DDD3" strokeDasharray="3 4" vertical={false}/>
          <XAxis dataKey="time" tick={{ fill: "#697083", fontSize: 11 }} axisLine={false} tickLine={false}/>
          <YAxis tick={{ fill: "#697083", fontSize: 11 }} axisLine={false} tickLine={false} unit=" Mbps"/>
          <Tooltip contentStyle={{ background: "#F5F4F0", border: "1px solid #BEB7A7", borderRadius: 6, boxShadow: "0 5px 18px rgba(17,34,80,.08)" }} />
          <Legend verticalAlign="top" align="right" iconType="line" wrapperStyle={{ fontSize: 12, paddingBottom: 15 }}/>
          <Area type="monotone" dataKey="download" name="Download" stroke="#3B507D" strokeWidth={2.2} fill="url(#downloadFill)" dot={false}/>
          <Area type="monotone" dataKey="upload" name="Upload" stroke="#BEB7A7" strokeWidth={2} fill="url(#uploadFill)" dot={false}/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
