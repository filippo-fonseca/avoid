import React from "react";
import {
  Container,
  LeftButton,
  RightButton,
  LeftButtonClicked,
} from "./styles";

const CityToggle = () => {
  return (
    <Container>
      <LeftButtonClicked>Seattle, WA</LeftButtonClicked>
      <RightButton>New York City, NY</RightButton>
    </Container>
  );
};

export default CityToggle;
