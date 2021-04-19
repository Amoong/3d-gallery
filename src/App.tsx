import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AppRouter from "Router";

const GlobalStyle = createGlobalStyle`
  ${reset}
  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const AppContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <AppRouter />
    </AppContainer>
  );
}

export default App;
