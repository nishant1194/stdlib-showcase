import React from "react";
import mockDownloads from "./data/mockDownloads";
import Heatmap from "./components/HeatMap";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Heatmap data={mockDownloads} />
     </div>
  );
}

export default App;
