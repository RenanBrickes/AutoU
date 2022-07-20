import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${({ theme, color }) => css`
    background-color: ${color};
    height: 40px;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      opacity: 0.9;
    }
  `};
`;
