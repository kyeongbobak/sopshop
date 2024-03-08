import { Header, HeaderInnerMain, HeaderButtonMenu, Logo, HeaderCartButton, HeaderLoginButton, SearchInput, SearchButton, HeaderUserSettingButton } from "./BuyerHeaderStyle";
import LogoImage from "../assets/Logo-hodu.png";
import CartIcon from "../assets/icon-shopping-cart.png";
import LoginIcon from "../assets/icon-user.png";
import UserSettingIcon from "../assets/icon-user.png";
import SearchIconImage from "../assets/search.png";

export default function BuyerHeader({ type }) {
  const UI = {
    login: (
      <Header>
        <HeaderInnerMain>
          <Logo>
            <img src={LogoImage} alt="" />
          </Logo>
          <SearchInput type="search" placeholder="상품을 검색해보세요!" />
          <SearchButton>
            <img src={SearchIconImage} alt="" />
          </SearchButton>
        </HeaderInnerMain>
        <HeaderButtonMenu>
          <HeaderCartButton>
            <img src={CartIcon} alt="" />
            <p>장바구니</p>
          </HeaderCartButton>
          <HeaderUserSettingButton>
            <img src={UserSettingIcon} alt="" />
            <p>마이페이지</p>
          </HeaderUserSettingButton>
        </HeaderButtonMenu>
      </Header>
    ),

    logout: (
      <Header>
        <HeaderInnerMain>
          <Logo>
            <img src={LogoImage} alt="" />
          </Logo>
          <SearchInput type="search" placeholder="상품을 검색해보세요!" />
          <SearchButton>
            <img src={SearchIconImage} alt="" />
          </SearchButton>
        </HeaderInnerMain>
        <HeaderButtonMenu>
          <HeaderCartButton>
            <img src={CartIcon} alt="" />
            <p>장바구니</p>
          </HeaderCartButton>
          <HeaderLoginButton>
            <img src={LoginIcon} alt="" />
            <p>로그인</p>
          </HeaderLoginButton>
        </HeaderButtonMenu>
      </Header>
    ),
  };

  return UI[type];
}
