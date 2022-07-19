import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Main } from "./main/main";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Main} element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};
