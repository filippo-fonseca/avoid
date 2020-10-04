import React from "react";
import {
  Container,
  LeftButton,
  RightButton,
  RightButtonClicked,
} from "./styles";
import Link from "next/link";

const CityToggle = () => {
  return (
    <Container>
      <Link href="../../../seattlemap">
        <LeftButton>Seattle, WA</LeftButton>
      </Link>

      <RightButtonClicked>New York City, NY</RightButtonClicked>
    </Container>
  );
};

export default CityToggle;
