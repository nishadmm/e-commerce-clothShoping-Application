import styled, { css } from "styled-components";

const ButtonStyle = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const GoogleSignInBtn = css`
  background-color: #4285f4;
  color: #fff;
  border: none;
  padding: 0 15px !important;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const InvertedButton = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: #000;
    color: #fff;
    border: none;
  }
`;

const getButtonStyle = (props) => {
  if (props.googleSignInBtn) {
    return GoogleSignInBtn;
  }

  return props.inverted ? InvertedButton : ButtonStyle;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  cursor: pointer;
  ${getButtonStyle}
`;
