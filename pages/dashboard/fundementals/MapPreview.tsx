import React from "react";
import { ContainerBox, MapImage, TestDiv, HeaderOne } from "./styles";
import Link from "next/link";

const shadowColor =
  "0 1px 2px 0 rgba(211, 211, 211, 1), 0 4px 4px 0 rgba(211, 211, 211, 1)";

class MapPreview extends React.Component {
  render() {
    return (
      <Link href="/seattlemap">
        <ContainerBox
          color="#C4C4C4"
          cursor="pointer"
          height="100%"
          paddingLeft="28px"
          paddingTop="24px"
          width="100%"
          shadowColor={shadowColor}
          borderRadius="30px"
          borderWidth="0px"
          borderColor="transparent"
          backgroundImage="https://i.ibb.co/27mHPVc/map.png"
          backgroundSize="cover"
        >
          <TestDiv>
            <HeaderOne size="27px" color="#313131">
              Testing Locations
            </HeaderOne>
          </TestDiv>
        </ContainerBox>
      </Link>
    );
  }
}

export default MapPreview;
