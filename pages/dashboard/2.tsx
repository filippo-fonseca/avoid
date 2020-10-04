import React from 'react';
import { FlexBoxOne, MarginedBox } from './styles';
import MostAffectedState from './fundementals/MostAffectedState';

class ComponentTwo extends React.Component {
  render() {
    return (
      <MarginedBox marginLeft='21px' marginRight='21px'>
        <FlexBoxOne flexDirection='row'>
          <MostAffectedState />
        </FlexBoxOne>
      </MarginedBox>
    );
  }
}

export default ComponentTwo;
