import styled from 'styled-components';

interface Text {
  size: string;
}

interface Margined {
  height?: string;
  width?: string;
}

interface Container {
  shadowColor?: string;
  color?: string;
  border?: string;
  borderColor?: string;
}

export const HeaderTwo = styled.p<Text>`
  font-size: ${(prop) => prop.size};
  color: #313131;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const HeaderOne = styled.p<Text>`
  font-size: ${(props) => props.size};
  color: #313131;
  font-weight: 800;
  margin: 0;
  padding: 0;
`;

export const ContainerBox = styled.div<Container>`
  background-color: ${(props) => props.color};
  height: 171px;
  width: 184px;
  border-radius: 30px;
  border-width: 1px;
  border-color: #ededed;
  border-style: solid;
  padding-left: 20px;
  padding-top: 46px;
  box-shadow: ${(props) => props.shadowColor};
`;

export const SizedBox = styled.div<Margined>`
  height: ${(prop) => prop.height};
  width: ${(prop) => prop.width};
`;
