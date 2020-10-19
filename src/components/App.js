import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router-dom";
//import GlobalContext from "../context/GlobalContext";
import Header from "./Header/Header";
import Hotels from "./Hotels/Hotels";

const GlobalStyle = createGlobalStyle`
body {
	margin: 0;
	padding: 0;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
	-webkit-font-smoothing: antialiased;
	-mpz-osx-font-smoothing: grayscale;
}
`;

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <Hotels />
    </AppWrapper>
  </>
);

export default App;
