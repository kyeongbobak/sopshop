import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainPageSlider = styled.div`
  height: 500px;
  background-color: skyblue;
`;

export const ProductListWrapper = styled.div``;

export const ProductGroup = styled.ul``;

export const ProductList = styled.li``;

export const Footer = styled.footer`
  background-color: var(--box-gray-color);
`;

export const FooterWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const FooterMenuWrap = styled.nav``;

export const FooterLinkMenu = styled.ul`
  display: flex;
`;

export const FooterLink = styled.li`
  font-size: var(--font-sm-size);
  cursor: pointer;

  + li::before {
    content: "|";
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
  }
`;

export const StyledLink = styled(Link)``;

export const StyledBoldLink = styled(Link)`
  font-weight: var(--font-bold);
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px 0 22px;
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 60px;
  border-top: 1px solid var(--gray-color);
  font-size: var(--font-sm-size);
  line-height: 24px;

  .first-span {
    font-weight: var(--font-bold);
  }
`;

export const FooterSnsWrap = styled.nav``;

export const FooterSns = styled.ul`
  display: flex;
  gap: 10px;
`;

export const FooterSnsLink = styled.li`
  cursor: pointer;
  img {
    width: 32px;
  }
`;
