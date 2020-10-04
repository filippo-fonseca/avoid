import React, { useEffect, useState, ReactNode } from "react";
import "./App.module.css";
import NYCMap from "./Map/NYCMap";
import { loadMapApi } from "./utils/GoogleMapsUtils";

function NYCMapView(props: { children: ReactNode }) {
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
        <NYCMap mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />
      )}

      {props.children}
    </div>
  );
}

export default NYCMapView;
