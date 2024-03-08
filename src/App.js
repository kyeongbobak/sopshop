import GlobalStyle from "./style/GlobalStyle";
import BuyerHeader from "./components/BuyerHeader";

function App() {
  return (
    <>
      <GlobalStyle />
      <BuyerHeader type="login" isLoggedIn />
    </>
  );
}
export default App;
