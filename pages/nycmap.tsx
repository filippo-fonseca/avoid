import React from "react";
import NYCMapView from "./maps/nycmapview";
import CityToggle from "./maps/city-toggle/nyc/CityToggle";

const DisplayNYCMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=16guXLAS8awdBQrE4G_ONfEcY2YVgswBK"
        width="1400"
        height="832"
      ></iframe>
      <div>
        <CityToggle />
      </div>
    </div>
  );
};

export default DisplayNYCMap;
