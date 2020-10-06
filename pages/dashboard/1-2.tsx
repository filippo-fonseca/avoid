import React from "react";
import { FlexBoxTwo, MarginedBox } from "./styles";
import ComponentOne from "./1";
import ComponentTwo from "./2";

class ComponentOneTwo extends React.Component {
  render() {
    return (
      <FlexBoxTwo flexDirection="row">
        <ComponentOne />
        <ComponentTwo />
      </FlexBoxTwo>
    );
  }
}

export default ComponentOneTwo;
