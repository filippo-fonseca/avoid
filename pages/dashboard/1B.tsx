import React from 'react';
import { FlexBoxOne } from './styles';
import TotalHospitalized from './fundementals/TotalHospitalized';
import TotalRecovered from './fundementals/TotalRecovered';

class ComponentOneB extends React.Component {
  render() {
    return (
      <FlexBoxOne flexDirection='row'>
        <TotalHospitalized />
        <TotalRecovered />
      </FlexBoxOne>
    );
  }
}

export default ComponentOneB;
