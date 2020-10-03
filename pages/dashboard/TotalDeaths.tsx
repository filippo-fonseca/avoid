import React from 'react';
import DataDisplay from './DataDisplay';
import { ContainerBox, HeaderTwo, SizedBox } from './styles';
import DeathIcon from './DeathIcon';

const shadowColor =
  '0 1px 2px 0 rgba(68, 255, 210, 1), 0 4px 10px 0 rgba(68, 255, 210, 1)';

class TotalDeaths extends React.Component {
  render() {
    return (
      <ContainerBox color='#44FFD2' shadowColor={shadowColor}>
        <DeathIcon color='#313131' />
        <SizedBox height='22px' />
        <HeaderTwo size='18px'>Total Deaths</HeaderTwo>
        <DataDisplay data='deaths' />
        <SizedBox height='8px' />
      </ContainerBox>
    );
  }
}

export default TotalDeaths;
