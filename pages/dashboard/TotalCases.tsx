import React from 'react';
import DataDisplay from './DataDisplay';
import { ContainerBox, HeaderTwo, SizedBox } from './styles';
import { WorldIcon } from './WorldIcon';

const shadowColor =
  '0 1px 2px 0 rgba(135, 246, 255, 1), 0 4px 10px 0 rgba(135, 246, 255, 1)';

class TotalCases extends React.Component {
  render() {
    return (
      <ContainerBox color='#87F6FF' shadowColor={shadowColor}>
        <WorldIcon />
        <SizedBox height='22px' />
        <HeaderTwo size='18px'>Total Cases</HeaderTwo>
        <DataDisplay data='positive' />
        <SizedBox height='8px' />
      </ContainerBox>
    );
  }
}

export default TotalCases;
