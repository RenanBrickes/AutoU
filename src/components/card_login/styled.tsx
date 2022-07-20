import styled, { css } from "styled-components";
import { StyledButton as Button } from "../button/styled";

export const Wraper = styled.div`
  ${({ theme }) => css`
    padding: 50px;
    height: 400px;
    width: 400px;
    display: grid;
    justify-content: center;
    background-color: ${theme.colors.ligthGray};
    margin-top: 100px;
    margin-bottom: 100px;
    border-radius: 10px;
    box-shadow: 10px 5px 5px ${theme.colors.ligthGray};
  `};
`;

export const SpanLogin = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fonts.family.title};
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 30px;
    text-transform: uppercase;
    text-align: center;
  `}
`;

export const WraperButtonHelp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  ${Button} {
    width: 180px !important;
  }
`;

export const WraperButtonLogin = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 50px;
  ${Button} {
    width: 180px !important;
  }
`;
