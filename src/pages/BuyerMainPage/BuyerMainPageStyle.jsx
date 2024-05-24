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
    /* top: 50%;
    transform: translateY(-50%); */
    width: 22px;
    padding-bottom: 10px;
    margin: -500px 0 0 330px;
  }
`;

export const SearchInput = styled.input`
  width: 200px;
  padding: 10px 15px 10px 15px;
  margin-left: 30px;
  border: none;
  border-bottom: 1px solid var(--black-color);
  outline: none;
  font-size: var(--font-lg-size);
  position: absolute;
  margin-top: -500px;
`;
