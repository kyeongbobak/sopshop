import { Header, HeaderWrapper, HeaderInnerMain, HeaderLinkMenu, Logo, SearchInput, SearchButton, HeaderCartLink, HeaderUserPageLink, HeaderLoginLink } from "./BuyerHeaderStyle";
import LogoImage from "../../assets/Logo-hodu.png";
import ShoppingCartIcon from "../../assets/icon-shopping-cart.png";
import UserIcon from "../../assets/icon-user.png";
import SearchIcon from "../../assets/search.png";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function BuyerHeader() {
  const { token, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token, setIsLoggedIn]);

  return (
    <Header>
      <HeaderWrapper>
        <HeaderInnerMain>
          <Logo Link to={`/mainPage`}>
            <img src={LogoImage} alt="" />
          </Logo>
          <SearchInput type="search" placeholder="상품을 검색해보세요!" />
          <SearchButton>
            <img src={SearchIcon} alt="" />
          </SearchButton>
        </HeaderInnerMain>
        <HeaderLinkMenu>
          <HeaderCartLink>
            <img src={ShoppingCartIcon} alt="" />
            <p>장바구니</p>
          </HeaderCartLink>
          {isLoggedIn ? (
            <HeaderUserPageLink>
              <img src={UserIcon} alt="" />
              <p>마이페이지</p>
            </HeaderUserPageLink>
          ) : (
            <HeaderLoginLink to={"./login"}>
              <img src={UserIcon} alt="" />
              <p>로그인</p>
            </HeaderLoginLink>
          )}
        </HeaderLinkMenu>
      </HeaderWrapper>
    </Header>
  );
}
