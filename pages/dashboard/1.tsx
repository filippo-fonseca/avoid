import React from 'react';
import { FlexBoxOne } from './styles';
import { SizedBox } from './fundementals/styles';
import ComponentOneA from './1A';
import ComponentOneB from './1B';

class ComponentOne extends React.Component {
  render() {
    return (
      <FlexBoxOne flexDirection='column'>
        <ComponentOneA />
        <ComponentOneB />
      </FlexBoxOne>
    );
  }
}

export default ComponentOne;
