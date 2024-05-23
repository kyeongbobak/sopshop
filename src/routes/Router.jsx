import { Outlet, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import BuyerLogin from "../pages/BuyerLogin/BuyerLogin";
import BuyerMainPage from "../pages/BuyerMainPage/BuyerMainPage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import BuyerSignUp from "../pages/BuyerSignUp/BuyerSignUp";
import BuyerShoppingCart from "../pages/BuyerShoppingCart/BuyerShoppingCart";
import BuyerSearchPage from "../pages/BuyerSearchPage/BuyerSearchPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import BuyerOrderPage from "../pages/BuyerOrderPage/BuyerOrderPage";
import BuyerMyPage from "../pages/BuyerMyPage/BuyerMyPage";
import BuyerOrderSuccess from "../pages/BuyerOrderSuccess/BuyerOrderSuccess";
import Flop from "../components/BuyerCartegoryProduct/Flop/Flop";
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
          <Route path="/Flop" element={<Flop />}></Route>
          <Route path="login" element={<BuyerLogin />}></Route>
          <Route path="/signUp" element={<BuyerSignUp />}></Route>
          <Route path="/products/*" element={<Outlet />}>
            <Route path="search/:searchKeyword" element={<BuyerSearchPage />} />
            <Route path=":product_id" element={<ProductDetail />}></Route>
            <Route path=":product_id/login" element={<BuyerLogin />}></Route>
          </Route>
          <Route path="/shoppingCart" element={<BuyerShoppingCart />}></Route>
          <Route path="/shoppingCart/*" element={<Outlet />}>
            <Route path="login" element={<BuyerLogin />}></Route>
          </Route>
          <Route path="/order" element={<BuyerOrderPage />}></Route>
          <Route path="/404" element={<NotFoundPage />}></Route>
          <Route path="/mypage" element={<BuyerMyPage />}></Route>
          <Route path="/orderSuccess" element={<BuyerOrderSuccess />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}
