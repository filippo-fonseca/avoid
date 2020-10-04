import React from 'react';
import { ContainerBox, HeaderTwo, SizedBox, HeaderOne } from './styles';
import { California } from './California';
const shadowColor =
  '0 1px 2px 0 rgba(65, 74, 255, 1), 0 4px 4px 0 rgba(65, 74, 255, 1)';

class MostAffectedState extends React.Component {
  render() {
    return (
      <ContainerBox
        height='100%'
        width='100%'
        color='#5634D1'
        shadowColor='none'
        borderRadius='30px'
        borderColor='transparent'
        borderWidth='0px'
        paddingLeft='24px'
        paddingTop='16px'
      >
        <HeaderOne size='27px' color='#ffffff'>
          California
        </HeaderOne>
        <SizedBox height='6px' />
        <HeaderTwo size='24px' color='white'>
          Most Affected State
        </HeaderTwo>
        <SizedBox height='18px' />
        <California color='#765CD9' height='290' width='245' />
      </ContainerBox>
    );
  }
}

export default MostAffectedState;
