import styled from "styled-components";
import { Link } from "react-router-dom";

export const Product = styled.li``;

export const ProductImage = styled(Link)`
  img {
    width: 380px;
    border-radius: 10px;
  }
`;

export const ProductStoreName = styled.div`
  color: var(--box-black-color);
  font-size: var(--font-md-size);
  font-weight: var(--font-light);
  margin-top: 17px;
`;

export const ProductName = styled(Link)`
  display: inline-block;
  font-size: var(--font-lg-size);
  font-weight: var(--font-light);
  margin-top: 15px;
`;

export const ProductPrice = styled.p`
  font-size: var(--font-lg-size);
  margin-top: 15px;
`;
