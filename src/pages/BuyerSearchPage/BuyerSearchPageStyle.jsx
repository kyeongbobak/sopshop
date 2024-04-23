import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchResultsWrapper = styled.div`
  width: 1280px;
  margin: 54px auto;
`;

export const SearchResultsInner = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 70px;
`;

export const SearchResultItem = styled.div``;

export const SearchResultsCount = styled.ul`
  font-size: var(--font-lg-size);
  font-weight: var(--font-light);
  margin-top: 100px;

  position: relative;

  strong {
    font-weight: var(--font-regular);
  }
`;

export const SearchResultItemImage = styled.img`
  width: 380px;
  border-radius: 10px;
`;

export const SearchResultItemDetails = styled.div`
  margin-top: 15px;
`;

export const SearchResultItemBrandName = styled.div`
  font-size: var(--font-lg-size);
  font-weight: var(--font-light);
  margin: 15px 0;
`;

export const SearchResultItemName = styled(Link)`
  font-size: var(--font-lg-size);
  font-weight: var(--font-light);
  margin: 15px 0;
`;

export const SearchResultItemPrice = styled.div`
  font-size: var(--font-lg-size);
  margin-top: 15px;
`;
