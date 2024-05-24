import styled from "styled-components";

export const BuyerMainPageWrapper = styled.div``;

export const BuyerMainPageCategory = styled.div``;

export const ProductListWrapper = styled.div`
  width: 1280px;
  margin: 30px auto;
`;

export const ProductGroup = styled.ul`
  display: flex;
  flex-flow: wrap;
  gap: 70px;
`;

export const SearchForm = styled.form`
  position: relative;
`;

export const SearchButton = styled.button`
  div {
    position: relative;
  }

  img {
    right: 10px;
    width: 22px;
    padding-bottom: 10px;
    margin: -795px 0 0 320px;
  }
`;

export const SearchInput = styled.input`
  width: 250px;
  padding: 10px 15px 10px 15px;
  margin-left: 70px;
  border: none;
  border-bottom: 1px solid var(--black-color);
  outline: none;
  font-size: var(--font-lg-size);
  position: absolute;
  margin-top: -800px;
`;
