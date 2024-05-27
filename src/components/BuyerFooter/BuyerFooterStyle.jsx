import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.footer``;

export const FooterWrapper = styled.div`
  margin: 0px 30px auto;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard";
  font-size: var(--font-sm-size);
`;

export const FooterMenuWrap = styled.nav``;

export const FooterLinkMenu = styled.ul`
  display: flex;
`;

export const FooterLink = styled.li`
  cursor: pointer;

  + li::before {
    content: "|";
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
  }
`;

export const StyledLink = styled(Link)`
  span {
    font-weight: var(--font-extra-bold);
  }
`;

export const StyledBoldLink = styled(Link)`
  font-weight: var(--font-extra-bold);
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
  padding: 10px 0px 30px;
  border-top: 1px solid var(--gray-color);
  line-height: 30px;

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
    width: 30px;
  }
`;
