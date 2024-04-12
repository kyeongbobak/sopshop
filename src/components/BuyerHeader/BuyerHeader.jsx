import { Header, HeaderWrapper, HeaderInnerMain, HeaderLinkMenu, Logo, SearchInput, SearchButton, HeaderCartLink, HeaderUserPageLink, HeaderLoginLink } from "./BuyerHeaderStyle";
import LogoImage from "../../assets/Logo-hodu.png";
import ShoppingCartIcon from "../../assets/icon-shopping-cart.png";
import UserIcon from "../../assets/icon-user.png";
import SearchIcon from "../../assets/search.png";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function BuyerHeader() {
  const { token, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [searchKeyword, setSearchKeyword] = useState();

  const navigate = useNavigate();

  const handleLoginStateChange = () => {
    setIsLoggedIn(!!token);
  };

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = () => {
    navigate(`/products/search/${searchKeyword}`);
  };

  useEffect(() => {
    handleLoginStateChange();
  });

  return (
    <Header>
      <HeaderWrapper>
        <HeaderInnerMain>
          <Logo Link to={`/mainPage`}>
            <img src={LogoImage} alt="" />
          </Logo>
          <SearchInput type="text" placeholder="search" value={searchKeyword} onChange={handleChange} />
          <SearchButton onClick={handleSearch}>
            <img src={SearchIcon} alt="" />
          </SearchButton>
        </HeaderInnerMain>
        <HeaderLinkMenu>
          <HeaderCartLink Link to={`/shoppingCart`}>
            <img src={ShoppingCartIcon} alt="" />
            <p>cart</p>
          </HeaderCartLink>
          {isLoggedIn ? (
            <HeaderUserPageLink>
              <img src={UserIcon} alt="" />
              <p>my page</p>
            </HeaderUserPageLink>
          ) : (
            <HeaderLoginLink to={"./login"}>
              <img src={UserIcon} alt="" />
              <p>login</p>
            </HeaderLoginLink>
          )}
        </HeaderLinkMenu>
      </HeaderWrapper>
    </Header>
  );
}
