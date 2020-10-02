import React from 'react';
import DataDisplay from './DataDisplay';
import { ContainerBox } from './styles';

class Mark extends React.Component {
  render() {
    return (
      <ContainerBox
        color='#87F6FF'
        shadowColor='0 1px 2px 0 rgba(135, 246, 255, 1),
    0 4px 10px 0 rgba(135, 246, 255, 1)'
      ></ContainerBox>
    );
  }
}

export default Mark;
