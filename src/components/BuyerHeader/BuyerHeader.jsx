import { Header, HeaderWrapper, HeaderInnerMain, HeaderLinkMenu, Logo, SearchForm, SearchInput, SearchButton, HeaderCartLink, HeaderUserPageLink, HeaderLoginLink, DropDownMenu, UserProfileLink, LogoutButton } from "./BuyerHeaderStyle";
import LogoImage from "../../assets/Logo-hodu.png";
import ShoppingCartIcon from "../../assets/icon-shopping-cart.png";
import UserIcon from "../../assets/icon-user.png";
import SearchIcon from "../../assets/search.png";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function BuyerHeader() {
  const { token, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [searchKeyword, setSearchKeyword] = useState();
  const [dropDown, setDropDown] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  const navigate = useNavigate();

  const handleLoginStateChange = () => {
    setIsLoggedIn(!!token);
  };

  const handleChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/products/search/${searchKeyword}`);
  };

  useEffect(() => {
    handleLoginStateChange();
  }, []);

  const handleLogout = async () => {
    const instance = axios.create({
      headers: {
        Authorization: `JWT ${token}`,
      },
    });

    try {
      const res = await instance.post("https://openmarket.weniv.co.kr/accounts/logout/");
      const data = await res.data;
      console.log(data);
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      setIsLoggedIn(false);
      navigate(`/mainPage`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Header>
      <HeaderWrapper>
        <HeaderInnerMain>
          <Logo Link to={`/mainPage`}>
            <img src={LogoImage} alt="" />
          </Logo>
          <SearchForm onSubmit={handleSearch}>
            <SearchInput type="text" placeholder="search" value={searchKeyword} onChange={handleChange} />
            <SearchButton type="submit">
              <img src={SearchIcon} alt="" />
            </SearchButton>
          </SearchForm>
        </HeaderInnerMain>
        <HeaderLinkMenu>
          <HeaderCartLink Link to={`/shoppingCart`}>
            <img src={ShoppingCartIcon} alt="" />
            <p>cart</p>
          </HeaderCartLink>
          {isLoggedIn ? (
            <HeaderUserPageLink
              onClick={() => {
                if (dropDown === false) {
                  setDropDown(true);
                } else {
                  setDropDown(false);
                }
              }}
            >
              {currentPath !== "/mypage" && <img src={UserIcon} alt="" />}
              {currentPath === "/mypage" ? (
                <button onClick={() => handleLogout()}>
                  <img src={UserIcon} alt="" />
                  <p>logout</p>
                </button>
              ) : (
                <p>my page</p>
              )}
              {currentPath !== "/mypage" && dropDown && (
                <>
                  <DropDownMenu>
                    <div>
                      <UserProfileLink to={`/mypage`}>My Page</UserProfileLink>
                      <LogoutButton onClick={() => handleLogout()}>Log out</LogoutButton>
                    </div>
                  </DropDownMenu>
                </>
              )}
            </HeaderUserPageLink>
          ) : (
            <HeaderLoginLink to={"/login"}>
              <img src={UserIcon} alt="" />
              <p>login</p>
            </HeaderLoginLink>
          )}
        </HeaderLinkMenu>
      </HeaderWrapper>
    </Header>
  );
}
