import GlobalStyle from "./style/GlobalStyle";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <GlobalStyle />
      </AuthContextProvider>
    </>
  );
}
export default App;
