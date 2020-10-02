import styled from 'styled-components';

interface Text {
  size: string;
}

interface Container {
  shadowColor: string;
  color: string;
  border: string;
  borderColor: string;
}

export const DisplayData = styled.p<Text>`
  font-size: ${(props) => props.size};
  color: #313131;
  font-weight: 800;
`;

export const ContainerBox = styled.div<Container>`
  background-color: ${(props) => props.color};
  height: 171px;
  width: 184px;
  border-radius: 30px;
  box-shadow: ${(props) => props.shadowColor};
`;
