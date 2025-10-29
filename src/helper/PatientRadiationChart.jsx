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
    <section className="bg-[#EAF3FF] py-10 sm:py-14 px-4 sm:px-8 flex flex-col items-center">
      {/* ---------- HEADING ---------- */}
      <div className="text-center mb-8 px-2">
        <h2 className="text-sm sm:text-lg font-semibold text-gray-700">
          Patient Radiation Dose Comparison of
        </h2>
        <h1 className="text-base sm:text-xl md:text-2xl font-bold text-gray-900 mt-1">
          Conventional Image Guided System vs.{" "}
          <span className="text-[#0072CE]">
            AI Image Guided System w/ FluoroShield™
          </span>
        </h1>
      </div>

      {/* ---------- CHART ---------- */}
      <div className="w-full max-w-6xl h-[300px] sm:h-[420px] bg-[#EBF6FF] rounded-xl shadow-md p-4 sm:p-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 40 }}
            barGap={8}
            barCategoryGap="25%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fontWeight: 500 }}
              interval={0}
              dy={10}
            />
            <YAxis
              tick={{ fontSize: 10 }}
              label={{
                value:
                  "Average Radiation Exposure per Procedure (Effective Dose, mSv)",
                angle: -90,
                position: "insideLeft",
                fontSize: 10,
              }}
            />
            <Tooltip />

            {/* ---------- BARS ---------- */}
            <Bar
              dataKey="Conventional"
              fill="#1E1E1E"
              barSize={30}
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="AI"
              fill="#4DA3FF"
              barSize={30}
              radius={[6, 6, 0, 0]}
            />

            {/* ---------- LINES ---------- */}
            <Line
              type="monotone"
              dataKey="Conventional"
              stroke="#999999"
              strokeWidth={2}
              dot={{ r: 4, fill: "#1E1E1E" }}
              isAnimationActive={true}
            />
            <Line
              type="monotone"
              dataKey="AI"
              stroke="#4DA3FF"
              strokeWidth={2}
              dot={{ r: 4, fill: "#4DA3FF" }}
              isAnimationActive={true}
            />

            {/* ---------- LEGEND ---------- */}
            <Legend
              verticalAlign="bottom"
              content={() => (
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-xs sm:text-sm mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#1E1E1E] rounded-sm"></div>
                    <span>Conventional System</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#4DA3FF] rounded-sm"></div>
                    <span>AI System</span>
                  </div>
                </div>
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ---------- FOOTNOTE ---------- */}
      <p className="text-xs sm:text-sm text-center text-gray-700 mt-6 max-w-3xl leading-relaxed px-2">
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
