import styled from "styled-components";

interface ContainerProps {
  height?: string;
  width?: string;
  bg?: string;
  textAlign?: string;
}

export const Container = styled.div<ContainerProps>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bg};
  text-align: ${(props) => props.textAlign};
  position: relative;
`;

export const RightContainer = styled.div`
  height: 7vh;
  width: 12%;
  background-color: red;
  margin-right: 5%;
  margin-left: auto;
  align-self: left;
  border-radius: 30px;
  background-color: #ededed;
  margin-top: -4.9rem;
`;

export const LeftContainer = styled.div`
  height: 10vh;
  width: 12%;
  margin-left: 5%;
  margin-right: auto;
  align-self: left;
  border-radius: 30px;
  background-image: url("https://i.ibb.co/M83KGCF/logo-1.png");
  margin-top: 1%;
  background-size: cover;
`;

export const RightMiniContainer = styled.div`
  width: 50%;
  height: 7vh;
  background-color: transparent;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
`;

export const HomeIcon = styled.svg`
  margin-left: 40%;
  margin-right: auto;
  margin-top: 12.5%;
  margin-bottom: auto;
  background-color: #414aff;
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
`;
export const RightMiniContainer2 = styled.div`
  width: 50%;
  margin-left: 50%;
  margin-top: -56px;
  height: 7vh;
  background-color: transaprent;
  margin-right: 0;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const MapIcon = styled.svg`
  margin-right: auto;
  margin-left: 15%;
  margin-top: 12%;
  margin-bottom: auto;
  cursor: pointer;
`;

export const ConnectHeaders = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
