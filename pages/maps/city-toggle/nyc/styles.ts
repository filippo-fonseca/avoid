import styled from "styled-components";

export const Container = styled.div`
  height: 8vh;
  width: 60vh;
  background-color: transparent;
  align-self: bottom center;
  margin-left: auto;
  margin-right: auto;
  margin-top: -5rem;
  border-top-left-radius: 50px;
  display: flex;
  position: relative;
`;

export const LeftButton = styled.button`
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  height: 7vh;
  width: 50%;
  font-weight: 800;
  border: none;
  background-color: #f9f9f9;
  outline: none;

  &:hover {
    background-color: #adffec;
  }

  :focus {
    background-color: #44ffd2;
    color: black;
  }
`;

export const RightButtonClicked = styled.button`
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  height: 7vh;
  width: 50%;
  font-weight: 800;
  border: none;
  background-color: #44ffd2;
  outline: none;

  &:hover {
    background-color: #adffec;
  }

  :focus {
    background-color: #44ffd2;
    color: black;
  }
`;

export const RightButton = styled.button`
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  height: 7vh;
  width: 50%;
  outline: none;
  font-weight: 800;
  border: none;
  background-color: #f9f9f9;

  &:hover {
    background-color: #adffec;
  }

  :focus {
    background-color: #44ffd2;
    color: black;
  }
`;

export const Wrapper = styled.div`
  &:hover ${RightButton} {
    display: none;
  }
`;
