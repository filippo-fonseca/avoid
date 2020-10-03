import React from 'react';
import DataDisplay from './DataDisplay';
import { ContainerBox, HeaderTwo, SizedBox } from './styles';
import { RecoveredIcon } from './RecoveredIcon';

const shadowColor =
  '0 1px 2px 0 rgba(224, 224, 224, 1), 0 4px 10px 0 rgba(224, 224, 224, 1)';

class TotalRecovered extends React.Component {
  render() {
    return (
      <ContainerBox color='#F9F9F9' shadowColor={shadowColor}>
        <RecoveredIcon color='#313131' />
        <SizedBox height='22px' />
        <HeaderTwo size='18px'>Recovered</HeaderTwo>
        <DataDisplay data='recovered' />
        <SizedBox height='8px' />
      </ContainerBox>
    );
  }
}

export default TotalRecovered;
