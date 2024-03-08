import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
  margin: 0 auto;
  padding: 20px 0;
`;

export const HeaderInnerMain = styled.div`
  display: flex;
`;

export const Logo = styled.a`
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

export const HeaderCartLink = styled.a``;

export const HeaderUserPageLink = styled.a`
  text-align: center;
`;

export const HeaderLoginLink = styled.a`
  text-align: center;
`;
