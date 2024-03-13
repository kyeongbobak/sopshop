import GlobalStyle from "./style/GlobalStyle";
import BuyerHeader from "./components/BuyerHeader";

function App() {
  return (
    <>
      <GlobalStyle />
      <BuyerHeader type="cart" isLoggedIn />
    </>
  );
}
export default App;
