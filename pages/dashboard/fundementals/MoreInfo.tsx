import React from 'react';
import Link from 'next/link';

import {
  ContainerBox,
  HeaderOne,
  HeaderTwo,
  SizedBox,
  ButtonText,
  StyledButton,
} from './styles';

const shadowColor =
  '0 1px 2px 0 rgba(135, 246, 255, 1), 0 4px 4px 0 rgba(135, 246, 255, 1)';

class MoreInfo extends React.Component {
  render() {
    return (
      <ContainerBox
        color='#87F6FF'
        height='100%'
        width='100%'
        shadowColor={shadowColor}
        borderRadius='30px'
        borderWidth='1px'
        borderColor='transparent'
        paddingLeft='20px'
        paddingTop='22px'
      >
        <HeaderOne size='27px' color='#313131'>
          Covid-19 Info
        </HeaderOne>
        <SizedBox height='6px' />
        <HeaderTwo size='24px' color='#313131'>
          Learn more about Covid-19
        </HeaderTwo>
        <SizedBox height='15px' />
        <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019'>
          <StyledButton>
            <ButtonText>Read More</ButtonText>
          </StyledButton>
        </a>
      </ContainerBox>
    );
  }
}

export default MoreInfo;
