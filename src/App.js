import GlobalStyle from "./style/GlobalStyle";
import AuthContextProvider from "./contexts/AuthContext";
import BuyerFooter from "./components/BuyerFooter/BuyerFooter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <AuthContextProvider>
          <BuyerFooter />
        </AuthContextProvider>
      </Router>
    </>
  );
}
export default App;
