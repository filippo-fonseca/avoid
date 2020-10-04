import React from "react";
import { ContainerBox, MapImage, TestDiv } from "./styles";

const shadowColor =
  "0 1px 2px 0 rgba(211, 211, 211, 1), 0 4px 4px 0 rgba(211, 211, 211, 1)";

class MapPreview extends React.Component {
  render() {
    return (
      <ContainerBox
        color="#C4C4C4"
        height="100%"
        width="100%"
        shadowColor={shadowColor}
        borderRadius="30px"
        borderWidth="0px"
        borderColor="transparent"
        backgroundImage="https://i.ibb.co/27mHPVc/map.png"
        backgroundSize="cover"
      >
        <TestDiv>{/* <MapImage /> */}</TestDiv>
      </ContainerBox>
    );
  }
}

export default MapPreview;
