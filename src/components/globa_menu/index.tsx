import { Link } from "@mui/material";
import * as Styled from "./styled";

export const GlobalMenu = () => {
  return (
    <>
      <Styled.Navbar>
        <Styled.DivLink>
          <Link href="/Entrar" underline="none">
            <Styled.TypographyOption>Entrar</Styled.TypographyOption>
          </Link>
          <Link href="/Inscrever-se" underline="none">
            <Styled.TypographyOption>Inscrever-se</Styled.TypographyOption>
          </Link>
          <Link href="/sobre-nos" underline="none">
            <Styled.TypographyOption>Sobre nós</Styled.TypographyOption>
          </Link>
          <Link href="/nosso-produtos" underline="none">
            <Styled.TypographyOption>Nossos produtos</Styled.TypographyOption>
          </Link>
        </Styled.DivLink>
      </Styled.Navbar>
    </>
  );
};
