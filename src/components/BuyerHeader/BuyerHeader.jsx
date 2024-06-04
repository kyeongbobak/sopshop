import { Header, HeaderWrapper, HeaderInnerMain, HeaderLinkMenu, Logo, HeaderCartLink, HeaderUserPageLink, HeaderLoginLink, DropDownMenu, UserProfileLink, LogoutButton } from "./BuyerHeaderStyle";
import LogoImage from "../../assets/img/Logo-SopShop.png";

import { useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function BuyerHeader() {
  const { token, isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [dropDown, setDropDown] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  const navigate = useNavigate();

  const handleLoginStateChange = useCallback(() => {
    setIsLoggedIn(!!token);
  }, [token, setIsLoggedIn]);

  useEffect(() => {
    handleLoginStateChange();
  }, [handleLoginStateChange]);

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
      navigate(`/`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Header>
      <HeaderWrapper>
        <HeaderInnerMain></HeaderInnerMain>
        <Logo Link to={`/`}>
          <img src={LogoImage} alt="" />
        </Logo>
        <HeaderLinkMenu>
          <HeaderCartLink Link to={`/shoppingCart`}>
            <p>Cart</p>
          </HeaderCartLink>
          {isLoggedIn ? (
            <HeaderUserPageLink
              onClick={() => {
                setDropDown(!dropDown);
              }}
            >
              {currentPath === "/mypage" ? (
                <button onClick={handleLogout}>
                  <p>Logout</p>
                </button>
              ) : (
                <p>Menu</p>
              )}
              {currentPath !== "/mypage" && dropDown && (
                <DropDownMenu>
                  <div>
                    <UserProfileLink to={`/mypage`}>my page</UserProfileLink>
                    <LogoutButton onClick={handleLogout}>log out</LogoutButton>
                  </div>
                </DropDownMenu>
              )}
            </HeaderUserPageLink>
          ) : (
            <HeaderLoginLink to={"/login"}>
              <p>Login</p>
            </HeaderLoginLink>
          )}
        </HeaderLinkMenu>
      </HeaderWrapper>
    </Header>
  );
}
