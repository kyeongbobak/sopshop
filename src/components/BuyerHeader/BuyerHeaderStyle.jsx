import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  box-shadow: 0px 0px 2px 2px var(--light-gray-color);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  margin: 0 auto;
  padding: 30px 0;
  padding-right: 10px;
`;

export const HeaderInnerMain = styled.div`
  display: flex;
`;

export const Logo = styled(Link)`
  img {
    width: 150px;
  }
`;

export const SearchForm = styled.form``;

export const SearchButton = styled.button`
  position: relative;

  img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    padding-bottom: 10px;
  }
`;

export const SearchInput = styled.input`
  width: 400px;
  padding: 10px 15px 10px 15px;
  border: none;
  border-bottom: 1px solid var(--black-color);
  outline: none;
  font-size: var(--font-lg-size);
`;

export const HeaderLinkMenu = styled.div`
  font-size: var(--font-md-size);
  display: flex;
  gap: 27px;

  img {
    width: 32px;
    padding-bottom: 5px;
  }

  p {
    color: var(--light-black-color);
  }

  button {
    color: var(--light-black-color);
  }
`;

export const HeaderCartLink = styled(Link)`
  text-align: center;
`;

export const HeaderUserPageLink = styled.button`
  text-align: center;
  position: relative;

  button {
  }
`;

export const HeaderLoginLink = styled(Link)`
  text-align: center;
`;

export const DropDownMenu = styled.ul`
  background-color: var(--white-color);
  position: absolute;
  top: 80px;
  right: -45px;
  padding-top: 20px;
  width: 152px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 1px var(--gray-color), 0px 4px 30px var(--light-gray-color);
  font-size: var(--font-lg-size);
  z-index: 999;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  ::after {
    border-top: 0px solid transparent;
    border-bottom: 11px solid var(--white-color);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    content: "";
    position: absolute;
    top: -10px;
    left: 70px;
  }
`;

export const UserProfileLink = styled(Link)``;

export const LogoutButton = styled.button`
  margin: 20px 0;
`;
