import React from 'react';
import DataDisplay from './DataDisplay';
import { ContainerBox, HeaderTwo, SizedBox } from './styles';
import { HospitalizedIcon } from './HospitalizedIcon';

const shadowColor =
  '0 1px 2px 0 rgba(224, 224, 224, 1), 0 4px 10px 0 rgba(224, 224, 224, 1)';

class TotalHospitalized extends React.Component {
  render() {
    return (
      <ContainerBox color='#F9F9F9' shadowColor={shadowColor}>
        <HospitalizedIcon color='#313131' />
        <SizedBox height='22px' />
        <HeaderTwo size='18px'>Hospitalized</HeaderTwo>
        <DataDisplay data='hospitalized' />
        <SizedBox height='8px' />
      </ContainerBox>
    );
  }
}

export default TotalHospitalized;
