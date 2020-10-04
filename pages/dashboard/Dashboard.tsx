import React from 'react';
import { FlexBoxTwo, MarginedBox } from './styles';
import ComponentFour from './4';
import ComponentOneTwoThree from './1-2-3';

class Dashboard extends React.Component {
  render() {
    return (
      <FlexBoxTwo
        height='100%'
        width='100%'
        marginTop='21px'
        marginBottom='21px'
        flexDirection='row'
      >
        <ComponentOneTwoThree />
        <ComponentFour />
      </FlexBoxTwo>
    );
  }
}

export default Dashboard;
