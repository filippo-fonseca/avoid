import React from 'react';
import { FlexBoxOne, MarginedBox } from './styles';
import TotalDeaths from './fundementals/TotalDeaths';
import TotalCases from './fundementals/TotalCases';

class ComponentOneA extends React.Component {
  render() {
    return (
      <MarginedBox marginBottom='21px'>
        <FlexBoxOne flexDirection='row'>
          <TotalCases />
          <TotalDeaths />
        </FlexBoxOne>
      </MarginedBox>
    );
  }
}

export default ComponentOneA;
