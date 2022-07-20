import styled, { css } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    border-radius: 15px;
    width: inherit !important;
    height: 40px;
    background-color: ${theme.colors.orange} !important;
    border-color: transparent;
    padding-left: 20px;
  `};
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-weight: bold;
    font-family: ${theme.fonts.family.title};
    margin-left: 15px;
  `};
`;
