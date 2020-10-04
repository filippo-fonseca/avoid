import React, { useEffect, useState, ReactNode } from "react";
import "./App.module.css";
import SeattleMap from "./Map/SeattleMap";
import { loadMapApi } from "./utils/GoogleMapsUtils";

function SeattleMapView(props: { children: ReactNode }) {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener("load", function () {
      setScriptLoaded(true);
    });
  }, []);

  return (
    <div className="map-view">
      {scriptLoaded && (
        <SeattleMap
          mapType={google.maps.MapTypeId.ROADMAP}
          mapTypeControl={true}
        />
      )}

      {props.children}
    </div>
  );
}

export default SeattleMapView;
