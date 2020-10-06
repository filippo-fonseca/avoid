import styled from "styled-components";

interface FlexDirection {
  flexDirection?: string;
  height?: string;
  width?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}
interface Margined {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
}

export const MarginedBox = styled.div<Margined>`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  height: 100%;
  width: 100%;
`;

export const FlexBoxOne = styled.div<FlexDirection>`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-evenly;
`;

export const FlexBoxTwo = styled.div<FlexDirection>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: space-evenly;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;
