import styled, { css } from "styled-components";
import { Typography } from "@mui/material";

export const Navbar = styled.div`
  display: grid;
  background-color: #6e767d;
  grid-template-columns: repeat(2, 50%);
  align-content: center;
  width: 100%;
  height: 100px;
`;

export const DivLink = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  margin-left: 50px;
`;

export const TypographyOption = styled(Typography)`
  ${({ theme }) => css`
    color: ${theme.colors.orange} !important;
    font-family: ${theme.fonts.family.title} !important;
    font-weight: bold !important;
    font-size: 1.2rem !important;
  `};
`;
