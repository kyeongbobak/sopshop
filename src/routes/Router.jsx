import { Outlet, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import BuyerLogin from "../pages/BuyerLogin/BuyerLogin";
import BuyerMainPage from "../pages/BuyerMainPage/BuyerMainPage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import BuyerSignUp from "../pages/BuyerSignUp/BuyerSignUp";
import BuyerShoppingCart from "../pages/BuyerShoppingCart/BuyerShoppingCart";
// import { useLocation } from "react-router-dom";

export default function Router() {
  // const location = useLocation();
  // console.log(location);
  // const currentPath = location.pathname;
  // console.log(currentPath);

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<BuyerLogin />}></Route>
          <Route path="/mainPage" element={<BuyerMainPage />}></Route>
          <Route path="/mainPage/*" element={<Outlet />}>
            <Route path="login" element={<BuyerLogin />}></Route>
          </Route>
          <Route path="/signUp" element={<BuyerSignUp />}></Route>
          <Route path="/products/*" element={<Outlet />}>
            <Route path=":product_id" element={<ProductDetail />}></Route>
            <Route path=":product_id/login" element={<BuyerLogin />}></Route>
          </Route>
          <Route path="/shoppingCart" element={<BuyerShoppingCart />}></Route>
          <Route path="/shoppingCart/*" element={<Outlet />}>
            <Route path="login" element={<BuyerLogin />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}
