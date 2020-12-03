import React from "react";
import CityToggle from "./maps/city-toggle/nyc/CityToggle";
import MapHeader from "./header/HeaderMap";
import { Container, Polygon, FrameDiv } from "../public/css/SeattleMap";

const DisplayNYCMap = () => {
  return (
    <Container>
      <MapHeader />
      <FrameDiv>
        <Polygon>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=16guXLAS8awdBQrE4G_ONfEcY2YVgswBK"
            width="1400"
            height="808"
          ></iframe>
        </Polygon>
      </FrameDiv>

      <CityToggle />
    </Container>
  );
};

export default DisplayNYCMap;
