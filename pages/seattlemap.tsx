import React from "react";
import SeattleMapView from "./maps/seattlemapview";
import NYCMapView from "./maps/nycmapview";
import CityToggle from "./maps/city-toggle/seattle/CityToggle";

const DisplaySeattleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=10YQ_lUpkXGWIJFYv07JC65TatPZTRXrZ"
        width="1400"
        height="832"
      ></iframe>
      <div>
        <CityToggle />
      </div>
    </div>
  );
};

export default DisplaySeattleMap;
