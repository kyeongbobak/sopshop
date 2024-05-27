import { Link } from "react-router-dom";
import styled from "styled-components";

export const BrandCategoryPageWrapper = styled.div`
  display: flex;
`;

export const ProductListWrapper = styled.div`
  width: 1150px;
  margin: 50px auto 300px;
`;

export const ProductPageNumber = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 50px 0;
  font-size: var(--font-min-size);

  a:nth-child(2) {
    text-decoration: underline;
  }
`;

export const ProductGroupTitle = styled.h3`
  font-size: var(--font-md-size);
  padding-bottom: 30px;
`;

export const ProductGroup = styled.ul`
  display: flex;
  flex-flow: wrap;
  gap: 50px;
`;

export const PrevButton = styled(Link)``;

export const PageNumberButton = styled(Link)``;

export const NextButton = styled(Link)``;
