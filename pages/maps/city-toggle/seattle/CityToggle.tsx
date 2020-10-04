import React from "react";
import {
  Container,
  LeftButton,
  RightButton,
  LeftButtonClicked,
} from "./styles";
import Link from "next/link";

const CityToggle = () => {
  return (
    <Container>
      <LeftButtonClicked>Seattle, WA</LeftButtonClicked>
      <Link href="../../../nycmap">
        <RightButton>New York City, NY</RightButton>
      </Link>
    </Container>
  );
};

export default CityToggle;
