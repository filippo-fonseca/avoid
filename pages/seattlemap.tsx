import React from "react";
import SeattleMapView from "./maps/seattlemapview";
import NYCMapView from "./maps/nycmapview";
import CityToggle from "./maps/city-toggle/seattle/CityToggle";
import MapHeader from "./header/HeaderMap";
import { Container, Polygon, FrameDiv } from "../public/css/SeattleMap";

const DisplaySeattleMap = () => {
  return (
    <Container>
      <MapHeader />
      <FrameDiv>
        <Polygon>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=10YQ_lUpkXGWIJFYv07JC65TatPZTRXrZ"
            width="1400"
            height="808"
          ></iframe>
        </Polygon>
      </FrameDiv>

      <CityToggle />
    </Container>
  );
};

export default DisplaySeattleMap;
