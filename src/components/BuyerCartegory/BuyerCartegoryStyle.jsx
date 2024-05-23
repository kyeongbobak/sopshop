import styled from "styled-components";
import { css } from "styled-components";
import { Link } from "react-router-dom";

export const BuyerCartegoryWrapper = styled.div`
  div {
    font-size: 22px;
    padding-left: 50px;
    position: relative;
  }

  ul {
    position: absolute;
    div {
      margin: 40px 0 0 -20px;
    }
  }

  li {
    margin-top: 15px;
  }

  li:nth-child(4) {
    margin-top: 100px;
  }
`;

export const CategoryLinkCommonStyle = css`
  display: flex;
  margin-bottom: 15px;
`;

export const About = styled(Link)``;

export const Shop = styled(Link)``;

export const Flop = styled(Link)`
  ${CategoryLinkCommonStyle}
  color: #eb9bf9;
`;

export const Ditto = styled(Link)`
  ${CategoryLinkCommonStyle}
`;

export const TooMuchShop = styled(Link)`
  ${CategoryLinkCommonStyle}
`;
