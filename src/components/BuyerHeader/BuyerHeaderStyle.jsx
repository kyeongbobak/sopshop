import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  box-shadow: 0px 0px 2px 5px var(--light-gray-color);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  margin: 0 auto;
  padding: 23px 0;
`;

export const HeaderInnerMain = styled.div`
  display: flex;
`;

export const Logo = styled(Link)`
  img {
    width: 124px;
  }
`;

export const SearchButton = styled.button`
  position: relative;

  img {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
  }
`;

export const SearchInput = styled.input`
  width: 400px;
  padding: 10px 15px 10px 15px;
  border: none;
  border-radius: 50px;
  box-shadow: 0px 4px 4px 1px #c2c2c2;
  outline: none;
`;

export const HeaderLinkMenu = styled.div`
  display: flex;
  gap: 27px;
  img {
    width: 32px;
    padding-bottom: 5px;
  }

  p {
    text-align: center;
  }
`;

export const HeaderCartLink = styled(Link)``;

export const HeaderUserPageLink = styled(Link)`
  text-align: center;
`;

export const HeaderLoginLink = styled(Link)`
  text-align: center;
`;
