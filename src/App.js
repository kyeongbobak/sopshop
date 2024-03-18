import GlobalStyle from "./style/GlobalStyle";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider></AuthProvider>
    </>
  );
}
export default App;
