import { Header, HeaderInnerMain, HeaderLinkMenu, Logo, SearchInput, SearchButton, HeaderCartLink, HeaderUserPageLink, HeaderLoginLink } from "./BuyerHeaderStyle";
import LogoImage from "../assets/Logo-hodu.png";
import ShoppingCartIcon from "../assets/icon-shopping-cart.png";
import UserIcon from "../assets/icon-user.png";
import SearchIcon from "../assets/search.png";

export default function BuyerHeader({ isLoggedIn }) {
  return (
    <Header>
      <HeaderInnerMain>
        <Logo>
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
          <HeaderLoginLink>
            <img src={UserIcon} alt="" />
            <p>로그인</p>
          </HeaderLoginLink>
        )}
      </HeaderLinkMenu>
    </Header>
  );
}
