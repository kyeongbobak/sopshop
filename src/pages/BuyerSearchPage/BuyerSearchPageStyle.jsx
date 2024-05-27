import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchPageWrapper = styled.div`
  display: flex;
`;

export const SearchResultsWrapper = styled.div`
  width: 1150px;
  margin: 0 auto 300px;
`;

export const SearchResultsInner = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 70px;
`;

export const SearchResultItem = styled.div``;

export const SearchResultsCount = styled.ul`
  font-size: var(--font-sm-size);
  font-weight: var(--font-light);
  margin-top: 48px;
  position: relative;

  strong {
    font-weight: var(--font-regular);
  }
`;

export const SearchResultItemImage = styled.img`
  width: 280px;
`;

export const SearchResultItemDetails = styled.div`
  margin-top: 15px;
`;

export const SearchResultItemBrandName = styled.div`
  font-size: var(--font-min-size);
  font-weight: var(--font-medium);
  margin: 15px 0;
`;

export const SearchResultItemName = styled(Link)`
  font-family: "Pretendard";
  font-size: var(--font-sm-size);
  font-weight: var(--font-thin);
  margin: 15px 0;
`;

export const SearchResultItemPrice = styled.div`
  font-family: "Pretendard";
  font-size: var(--font-sm-size);
  margin-top: 15px;
`;
