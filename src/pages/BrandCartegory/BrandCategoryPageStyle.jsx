import styled from "styled-components";

export const ProductListWrapper = styled.div`
  width: 1280px;
  margin: 80px auto 250px;
`;

export const ProductPageNumber = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 50px 0;
  font-size: var(--font-md-size);

  a:nth-child(2) {
    text-decoration: underline;
  }
`;

export const ProductGroupTitle = styled.h3`
  font-size: 24px;
  padding-bottom: 30px;
`;

export const ProductGroup = styled.ul`
  display: flex;
  flex-flow: wrap;
  gap: 70px;
`;
