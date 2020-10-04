import React from 'react';
import DataDisplay from './DataDisplay';
import { ContainerBox, HeaderTwo, SizedBox } from './styles';
import { HospitalizedIcon } from './HospitalizedIcon';

const shadowColor =
  '0 1px 2px 0 rgba(224, 224, 224, 1), 0 4px 4px 0 rgba(224, 224, 224, 1)';

class TotalHospitalized extends React.Component {
  render() {
    return (
      <ContainerBox
        color='#F9F9F9'
        height='100%'
        width='100%'
        marginRight='21px'
        shadowColor={shadowColor}
        borderRadius='30px'
        borderWidth='1px'
        borderColor='#F9F2F2'
        paddingLeft='20px'
        paddingTop='46px'
      >
        <HospitalizedIcon color='#313131' />
        <SizedBox height='22px' />
        <HeaderTwo color='313131' size='18px'>
          Hospitalized
        </HeaderTwo>
        <DataDisplay data='hospitalized' />
        <SizedBox height='8px' />
      </ContainerBox>
    );
  }
}

export default TotalHospitalized;
