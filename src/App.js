import GlobalStyle from "./style/GlobalStyle";
import { AuthProvider } from "./contexts/AuthContext";
import BuyerMainPage from "./pages/BuyerMainPage/BuyerMainPage";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AuthProvider>
        <BuyerMainPage />
      </AuthProvider>
    </Router>
  );
}
export default App;
