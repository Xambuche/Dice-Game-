import styled from "styled-components";

export const Button = styled.button`
  color: white;
  padding: 15px;
  margin-left: 15%;
  background: #222;
  border-radius: 5px;
  min-width: 360px;
  border: none;
  font-size: 16x;
  border: solid ;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: red;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: black;
  border: 1px transparent;
  color: white;
  &:hover {
    background-color: brown;
    border: 1px solid transparent;
    color: black;
  }
`;

export const RulesContainer = styled(Button)`
  max-width: 800px;
  margin: 0 auto;
  margin-left: 200%;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;


