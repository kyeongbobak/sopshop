import styled from "styled-components";
import { css } from "styled-components";
import { Link } from "react-router-dom";

export const BuyerCartegoryWrapper = styled.div`
  div {
    font-size: 25px;
    padding-left: 70px;
    position: relative;
  }

  ul {
    position: absolute;
    div {
      margin: 40px 0 0 -30px;
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
