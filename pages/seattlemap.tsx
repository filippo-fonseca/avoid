import React from "react";
import SeattleMapView from "./maps/seattlemapview";
import NYCMapView from "./maps/nycmapview";
import CityToggle from "./maps/city-toggle/seattle/CityToggle";

const DisplaySeattleMap = () => {
  return (
    <SeattleMapView>
      <CityToggle />
    </SeattleMapView>
  );
};

export default DisplaySeattleMap;
