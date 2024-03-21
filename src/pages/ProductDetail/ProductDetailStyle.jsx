import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ProductDetailWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;
export const ProductDetailTabMenu = styled.ul`
  width: 100%;
  display: flex;
  text-align: center;
  font-size: var(--font-lg-size);
`;
export const TabMenuItem = styled.li`
  width: 320px;
`;

export const ProductDetailTabLink = css`
  width: 100%;
  display: inline-block;
  padding: 19px 0;
`;

export const ProductDetailLink = styled(Link)`
  ${ProductDetailTabLink}
  border-bottom: ${(props) => (props.isActive ? "6px solid var(--box-black-color)" : "6px solid #e0e0e0")};
`;
export const ProductReviewLink = styled(Link)`
  ${ProductDetailTabLink}
  border-bottom: ${(props) => (props.isActive ? "6px solid var(--box-black-color)" : "6px solid #e0e0e0")};
`;
export const ProductQnALink = styled(Link)`
  ${ProductDetailTabLink}
  border-bottom: ${(props) => (props.isActive ? "6px solid var(--box-black-color)" : "6px solid #e0e0e0")};
`;
export const ProductRefundLink = styled(Link)`
  ${ProductDetailTabLink}
  border-bottom: ${(props) => (props.isActive ? "6px solid var(--box-black-color)" : "6px solid #e0e0e0")};
`;
