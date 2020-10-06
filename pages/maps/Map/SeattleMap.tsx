import React, { useEffect, useRef, useState } from "react";
import "./Map.module.scss";

interface IMap {
  mapType: google.maps.MapTypeId;
  mapTypeControl?: boolean;
}

type GoogleLatLng = google.maps.LatLng;
type GoogleMap = google.maps.Map;

const SeattleMap: React.FC<IMap> = ({ mapType, mapTypeControl = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<GoogleMap>();

  const startMap = (): void => {
    if (!map) {
      defaultMapStart();
      setMarker();
    }
  };
  useEffect(startMap, [map]);

  const defaultMapStart = (): void => {
    const defaultAddress = new google.maps.LatLng(47.606209, -122.332069);
    initMap(10, defaultAddress);
  };

  const initMap = (zoomLevel: number, address: GoogleLatLng): void => {
    if (ref.current) {
      setMap(
        new google.maps.Map(ref.current, {
          zoom: zoomLevel,
          center: address,
          mapTypeControl: mapTypeControl,
          streetViewControl: false,
          rotateControl: false,
          scaleControl: true,
          fullscreenControl: false,
          panControl: false,
          zoomControl: true,
          gestureHandling: "cooperative",
          mapTypeId: mapType,
          draggableCursor: "pointer",
        })
      );

      // either this:
      new google.maps.Marker({
        position: { lat: 47.606209, lng: -122.3320694 },
        map: map,
        title: "Hello World!",
      });
    }
  };

  // or this: (for the marker)

  const setMarker = () => {
    const marker = new google.maps.Marker({
      position: { lat: 47.606209, lng: -122.3320694 },
      map,
      title: "Hello World!",
    });
  };

  return (
    <div className="map-container">
      <div
        ref={ref}
        className="map-container__map"
        style={{ height: "100vh" }}
      ></div>
    </div>
  );
};

export default SeattleMap;
