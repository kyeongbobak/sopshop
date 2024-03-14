import GlobalStyle from "./style/GlobalStyle";
import AuthContextProvider from "./contexts/AuthContext";
import BuyerMainPage from "./pages/BuyerMainPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AuthContextProvider>
        <BuyerMainPage />
      </AuthContextProvider>
    </Router>
  );
}
export default App;
