import GlobalStyle from "./style/GlobalStyle";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthContextProvider></AuthContextProvider>
    </>
  );
}
export default App;
