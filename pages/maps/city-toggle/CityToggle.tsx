import React from "react";
import { Container, LeftButton, RightButton, Wrapper } from "./styles";

const CityToggle = () => {
  return (
    <Container>
      <LeftButton>Seattle, WA</LeftButton>
      <RightButton>New York City, NY</RightButton>
    </Container>
  );
};

export default CityToggle;
