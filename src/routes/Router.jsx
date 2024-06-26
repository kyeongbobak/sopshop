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
import OrderSuccessPage from "../pages/BuyerOrderSuccess/OrderSuccessPage";
import BrandCategoryPage from "../pages/BrandCartegoryPage/BrandCategoryPage";

export default function Router() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<BuyerMainPage />}></Route>
          <Route path=":BrandName" element={<BrandCategoryPage />} />
          <Route path="/login" element={<BuyerLogin />}></Route>
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
          <Route path="/orderSuccess" element={<OrderSuccessPage />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}
