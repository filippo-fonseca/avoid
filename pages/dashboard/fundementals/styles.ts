import styled from 'styled-components';

interface Text {
  size: string;
  color: string;
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
  height: string;
  width: string;
  borderRadius?: string;
  borderWidth?: string;
  paddingLeft?: string;
  paddingTop?: string;
  marginRight?: string;
  marginBottom?: string;
}

export const HeaderTwo = styled.p<Text>`
  font-size: ${(prop) => prop.size};
  color: ${(prop) => prop.color};
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

export const HeaderOne = styled.p<Text>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  font-weight: 800;
  margin: 0;
  padding: 0;
`;

export const ContainerBox = styled.div<Container>`
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-right: ${(props) => props.marginRight};
  border-radius: ${(props) => props.borderRadius};
  border-width: ${(props) => props.borderWidth};
  border-color: ${(props) => props.borderColor};
  border-style: solid;
  padding-left: ${(props) => props.paddingLeft};
  padding-top: ${(props) => props.paddingTop};
  box-shadow: ${(props) => props.shadowColor};
`;

export const SizedBox = styled.div<Margined>`
  height: ${(prop) => prop.height};
  width: ${(prop) => prop.width};
`;
// height: 171px;
// width: 184px;

export const Center = styled.div`
  align-self: center;
`;

export const StyledButton = styled.button`
  background-color: #00a8b8;
  border: none;
  margin-bottom: 23px;
  border-radius: 20px;
  height: 35px;
  width: 150px;

  &:hover {
    background-color: #00cee0;
  }
`;

export const ButtonText = styled.p`
  color: white;
  font-weight: 700;
  font-size: 18px;
  margin: 0px;
  padding: 0px;
`;

export const TestDiv = styled.div`
  height: 342px;
`;

interface InputImg {
  src: string;
}

export const ArticleImage = styled.div<InputImg>`
  height: 57px;
  width: 94px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 10px;
  margin-right: 14px; ;
`;

interface ArticleImport {
  marginBottom?: string;
}

export const ArticleBox = styled.div<ArticleImport>`
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin-bottom: ${(props) => props.marginBottom};
`;

export const HeaderBox = styled.div`
  padding-top: 1px;
  display: flex;
  flex-direction: column;
`;

export const ContainerBox2 = styled.div<Container>`
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  border-radius: ${(props) => props.borderRadius};
  border-width: ${(props) => props.borderWidth};
  border-color: ${(props) => props.borderColor};
  border-style: solid;
  padding-left: ${(props) => props.paddingLeft};
  padding-top: ${(props) => props.paddingTop};
  box-shadow: ${(props) => props.shadowColor};
`;
