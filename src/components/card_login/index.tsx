import { useState } from "react";
import { theme } from "../../styles/theme";
import { Button } from "../button";
import { Input } from "../input";
import * as Styled from "./styled";
export const CardLogin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const forgetPasswordHandle = () => {
    console.log("forget password");
  };

  const requestAccessHandle = () => {
    console.log("request access");
  };

  const loginHandle = () => {
    console.log("login");
  };

  return (
    <>
      <Styled.Wraper>
        <Styled.SpanLogin>Login</Styled.SpanLogin>
        <Input
          placeholder="Insira seu email aqui..."
          title="E-mail"
          value={email}
          setValue={setEmail}
        />
        <Input
          type="password"
          placeholder="Insira sua senha aqui..."
          title="Senha"
          value={password}
          setValue={setPassword}
        />
        <Styled.WraperButtonHelp>
          <Button
            text="Esqueceu a senha ?"
            color={theme.colors.ligthGray}
            setAction={forgetPasswordHandle}
          />
          <Button
            text="Solicitar acesso"
            color={theme.colors.ligthGray}
            setAction={requestAccessHandle}
          />
        </Styled.WraperButtonHelp>
        <Styled.WraperButtonLogin>
          <Button
            text="Entrar"
            color={theme.colors.ligthGreen}
            setAction={loginHandle}
          />
        </Styled.WraperButtonLogin>
      </Styled.Wraper>
    </>
  );
};
