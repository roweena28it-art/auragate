import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#112250", "#3B507D", "#BEB7A7", "#E7E2CE"];

export default function TrafficChart({ data }) {
  return (
    <div className="traffic-layout">
      <div className="donut">
        <ResponsiveContainer width="100%" height={190}>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="name" innerRadius={58} outerRadius={82} paddingAngle={2} stroke="#F5F4F0" strokeWidth={2}>
              {data.map((_, i) => <Cell key={i} fill={COLORS[i]}/>)}
            </Pie>
            <Tooltip contentStyle={{ background: "#F5F4F0", border: "1px solid #BEB7A7", borderRadius: 6 }} formatter={(v) => [`${v}%`, "Usage"]}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="traffic-legend">
        {data.map((item, i) => (
          <div className="legend-row" key={item.name}>
            <span className="legend-swatch" style={{ background: COLORS[i] }}></span>
            <span>{item.name}</span><strong>{item.value}%</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
