import React from "react";
import mean from "@stdlib/stats/base/mean";
import max from "@stdlib/stats/base/max";
import Float64Array from "@stdlib/array/float64";


const getColor = (count, maxCount) => {
  const intensity = Math.round((count / maxCount) * 255);
  return `rgba(59, 130, 246, ${count === 0 ? 0.1 : intensity / 255})`; 
};

const Heatmap = ({ data }) => {
    const countsArray = new Float64Array(data.map((d) => d.count));
    const avg = mean(countsArray.length, countsArray, 1);
    const maxCount = max(countsArray.length, countsArray, 1);
    
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📊 Downloads Heatmap</h2>
      <p className="mb-2 text-gray-600">Average downloads: {avg.toFixed(2)}</p>

      <div className="grid grid-cols-9 gap-2">
        {data.map(({ date, count }) => (
          <div
            key={date}
            title={`${date}: ${count} downloads`}
            className="w-6 h-6 rounded-md"
            style={{
              backgroundColor: getColor(count, maxCount),
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-4">Data for last {data.length} days</p>
    </div>
  );
};

export default Heatmap;
