import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchCards from "./pages/SearchCards";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./static/themes";
import { GlobalStyle } from "./static/global";


export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchCards />} />
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
  );
}


