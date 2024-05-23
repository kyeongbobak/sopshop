import styled from "styled-components";
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

export const About = styled(Link)``;

export const Shop = styled(Link)``;

export const Flop = styled(Link)`
  color: #eb9bf9;
`;
