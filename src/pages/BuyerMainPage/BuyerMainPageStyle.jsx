import styled from "styled-components";

export const BuyerMainPageWrapper = styled.div`
  /* font-size: 22px;
  padding: 50px;
  position: relative; */
`;

export const BuyerMainPageCategory = styled.div`
  /* ul {
    position: absolute;
    div {
      margin: 40px 0 0 20px;
    }
  }

  li {
    margin-top: 15px;
  }

  li:nth-child(4) {
    margin-top: 90px;
  } */
`;

export const ProductListWrapper = styled.div`
  width: 1280px;
  margin: 80px auto;
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
  width: 300px;
  padding: 10px 15px 10px 15px;
  margin-left: 30px;
  border: none;
  border-bottom: 1px solid var(--black-color);
  outline: none;
  font-size: var(--font-lg-size);
  position: absolute;
  margin-top: -500px;
`;
