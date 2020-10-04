import React from "react";

import { RightContainer, LeftContainer, ConnectHeaders } from "./styles";

class JoinedNavs extends React.Component {
  render() {
    return (
      <ConnectHeaders>
        <LeftContainer />
        <RightContainer />
      </ConnectHeaders>
    );
  }
}

export default JoinedNavs;
