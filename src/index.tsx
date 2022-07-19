import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";
import { RoutesApp } from "./routes/routes";
import { GlobalMenu } from "./components/globa_menu";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Source+Sans+Pro:wght@200&display=swap"
      rel="stylesheet"
    ></link>
    <ThemeProvider theme={theme}>
      <GlobalMenu />
      <RoutesApp />
      <GlobalStyles />
    </ThemeProvider>
  </>
);
