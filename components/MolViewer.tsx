// MolViewer.tsx
import { useState, useEffect } from "react";
import $ from "jquery";
// @ts-ignore
import * as $3Dmol from "3dmol/build/3Dmol.js";

const MolViewer = () => {
  useEffect(() => {
    const initViewer = () => {
      let element = $("#container-01");
      let config = { backgroundColor: "orange" };
      let viewer = $3Dmol.createViewer(element, config);
      viewer.addSphere({
        center: { x: 0, y: 0, z: 0 },
        radius: 10.0,
        color: "green",
      });
      viewer.zoomTo();
      viewer.render();
      viewer.zoom(0.8, 2000);
    };

    if (typeof window !== "undefined") {
      initViewer();
    }
  }, []);

  return (
    <div
      id="container-01"
      className="mol-container"
      style={{ width: "60%", height: 400, position: "relative" }}
    ></div>
  );
};

export default MolViewer;
