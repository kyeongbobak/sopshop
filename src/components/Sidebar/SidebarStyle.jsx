import styled from "styled-components";
import { css } from "styled-components";
import { Link } from "react-router-dom";

export const SideBarWrapper = styled.div`
  width: 170px;
  margin-right: 70px;

  div {
    font-size: var(--font-md-size);
    padding-left: 70px;
  }

  ul {
    div {
      margin: 40px 0 0 -50px;
    }
  }

  li {
    margin-top: 15px;
    font-weight: var(--font-light);
  }

  li:nth-child(4) {
    margin-top: 100px;
  }
`;

export const CategoryLinkCommonStyle = css`
  display: flex;
  margin-bottom: 15px;
  font-weight: var(--font-medium);
`;

export const About = styled(Link)``;

export const Shop = styled(Link)``;

export const Flop = styled(Link)`
  ${CategoryLinkCommonStyle}
  color: var(--main-color);
`;

export const Ditto = styled(Link)`
  ${CategoryLinkCommonStyle}
`;

export const TooMuchShop = styled(Link)`
  ${CategoryLinkCommonStyle}
`;

export const Notice = styled(Link)``;

export const QandA = styled(Link)``;

export const Review = styled(Link)``;

export const SearchForm = styled.form`
  span {
    font-size: var(--font-sm-size);
    font-weight: var(--font-extra-light);
    position: absolute;
    margin: 80px 0 0 70px;
  }
`;

export const SearchButton = styled.button``;

export const SearchInput = styled.input`
  width: 110px;
  padding: 10px 15px 10px 15px;
  margin-left: 70px;
  border: none;
  border-bottom: 1px solid var(--black-color);
  outline: none;
  font-size: var(--font-sm-size);
  margin-top: 100px;
  position: relative;
`;
