import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  Legend,
} from "recharts";

const data = [
  { name: "ERCP", Conventional: 4, AI: 1.5 },
  { name: "DCA", Conventional: 7, AI: 2.7 },
  { name: "PCI *Stent, Ablation", Conventional: 23, AI: 8.8 },
];

const PatientRadiationChart = () => {
  return (
    <section className="bg-[#EAF3FF] py-12 px-6 flex flex-col items-center">
      {/* ---------- HEADING ---------- */}
      <div className="text-center mb-8">
        <h2 className="text-lg font-semibold text-gray-700">
          Patient Radiation Dose Comparison of
        </h2>
        <h1 className="text-xl font-bold text-gray-900">
          Conventional Image Guided System vs.{" "}
          <span className="text-[#0072CE]">
            AI Image Guided System w/ FluoroShield™
          </span>
        </h1>
      </div>

      {/* ---------- CHART ---------- */}
      <div className="w-full max-w-5xl h-[420px] bg-[#EBF6FF] rounded-xl shadow-md p-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
            barGap={10}
            barCategoryGap="25%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              interval={0}
              dy={10}
            />
            <YAxis
              label={{
                value:
                  "Average Radiation Exposure per Procedure (Effective Dose, mSv)",
                angle: -90,
                position: "insideLeft",
                fontSize: 12,
              }}
            />
            <Tooltip />

            {/* ---------- BARS ---------- */}
            <Bar
              dataKey="Conventional"
              fill="#1E1E1E"
              barSize={45}
              radius={[6, 6, 0, 0]}
              stackId="a"
            />
            <Bar
              dataKey="AI"
              fill="#4DA3FF"
              barSize={45}
              radius={[6, 6, 0, 0]}
              stackId="b"
            />

            {/* ---------- LINES ---------- */}
            <Line
              type="monotone"
              dataKey="Conventional"
              stroke="#999999"
              strokeWidth={2}
              dot={{ r: 5, fill: "#1E1E1E" }}
              isAnimationActive={true}
            />
            <Line
              type="monotone"
              dataKey="AI"
              stroke="#4DA3FF"
              strokeWidth={2}
              dot={{ r: 5, fill: "#4DA3FF" }}
              isAnimationActive={true}
            />

            {/* ---------- LEGEND ---------- */}
            <Legend
              verticalAlign="bottom"
              wrapperStyle={{ paddingTop: 20 }}
              content={() => (
                <div className="flex justify-center gap-8 text-sm mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#1E1E1E] rounded-sm"></div>
                    <span>Conventional System</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#4DA3FF] rounded-sm"></div>
                    <span>AI System</span>
                  </div>
                </div>
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ---------- FOOTNOTE ---------- */}
      <p className="text-sm text-center text-gray-700 mt-6 max-w-3xl leading-relaxed">
        <strong>**Assuming 61.8% reduction in radiation to patient</strong> as
        demonstrated in study by Bang et al., (2020)
        <br />
        AI = Artificial Intelligence; DCA = Diagnostic Coronary Angiogram; ERCP
        = Endoscopic Retrograde Cholangiopancreatography; PCI = Percutaneous
        Coronary Intervention
      </p>
    </section>
  );
};

export default PatientRadiationChart;
