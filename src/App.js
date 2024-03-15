import GlobalStyle from "./style/GlobalStyle";
import AuthContextProvider from "./contexts/AuthContext";
import ProductList from "./components/ProductList/ProductList";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <AuthContextProvider>
          <ProductList />
        </AuthContextProvider>
      </Router>
    </>
  );
}
export default App;
