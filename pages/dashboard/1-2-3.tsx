import React from 'react';
import { FlexBoxTwo, MarginedBox } from './styles';
import ComponentOneTwo from './1-2';
import ComponentThree from './3';

class ComponentOneTwoThree extends React.Component {
  render() {
    return (
      <FlexBoxTwo
        height='100%'
        width='100%'
        marginLeft='21px'
        flexDirection='column'
      >
        <ComponentOneTwo />
        <ComponentThree />
      </FlexBoxTwo>
    );
  }
}

export default ComponentOneTwoThree;
