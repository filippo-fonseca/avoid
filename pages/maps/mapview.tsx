import React, { useEffect, useState } from "react";
import "./App.module.css";
import Map from "./Map/";
import { loadMapApi } from "./utils/GoogleMapsUtils";

function MapView() {
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
    </div>
  );
}

export default MapView;
