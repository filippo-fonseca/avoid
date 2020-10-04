import React from 'react';
import DataDisplay from './DataDisplay';
import { ContainerBox, HeaderTwo, SizedBox } from './styles';
import { WorldIcon } from './WorldIcon';

const shadowColor =
  '0 1px 2px 0 rgba(135, 246, 255, 1), 0 4px 4px 0 rgba(135, 246, 255, 1)';

class TotalCases extends React.Component {
  render() {
    return (
      <ContainerBox
        color='#87F6FF'
        height='100%'
        width='100%'
        marginRight='21px'
        shadowColor={shadowColor}
        borderRadius='30px'
        borderWidth='0px'
        borderColor='transparent'
        paddingLeft='20px'
        paddingTop='46px'
      >
        <WorldIcon />
        <SizedBox height='22px' />
        <HeaderTwo size='18px' color='#313131'>
          Total Cases
        </HeaderTwo>
        <DataDisplay data='positive' />
        <SizedBox height='8px' />
      </ContainerBox>
    );
  }
}

export default TotalCases;
