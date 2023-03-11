import { useState } from "react";
import "../css/styles.css";

function Testframes() {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <h1>Progress: {progress}%</h1>
      <div class="box" style={{ left: progress + "px" }}></div>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        step="1"
        onInput={(e) => setProgress(e.target.value)}
      />
    </div>
  );
}

export default Testframes;
