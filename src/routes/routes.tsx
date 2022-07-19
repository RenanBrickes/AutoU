import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Login } from "../screen/login/index";
import { Main, Entrar } from "./main";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Main} element={<App />} />
        <Route path={Entrar} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
