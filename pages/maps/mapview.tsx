import React, { useEffect, useState, ReactNode } from "react";
import "./App.module.css";
import Map from "./Map/";
import { loadMapApi } from "./utils/GoogleMapsUtils";

function MapView(props: { children: ReactNode }) {
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
        <Map mapType={google.maps.MapTypeId.ROADMAP} mapTypeControl={true} />
      )}

      {props.children}
    </div>
  );
}

export default MapView;
