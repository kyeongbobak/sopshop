import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ProductDetailWrapper = styled.div`
  width: 1280px;
  margin: 81px auto;
`;

export const ProductDetailContent = styled.div`
  display: flex;
`;

export const ProductDetailInfo = styled.div`
  width: 630px;
  margin-left: 51px;
`;

export const ProductImage = styled.img`
  width: 599px;
`;

export const ProductBrandName = styled.p`
  font-size: var(--font-lg-size);
`;

export const ProductName = styled.h2`
  font-size: var(--font-extra-size);
  font-weight: var(--font-bold);
  margin-top: 16px;
`;

export const ProductPrice = styled.p`
  font-size: var(--font-extra-size);
  font-weight: var(--font-bold);
  margin-top: 20px;

  span {
    font-size: var(--font-lg-size);
  }
`;

export const ProductDelivary = styled.div`
  margin-top: 138px;
  padding-bottom: 20px;
  font-size: var(--font-md-size);
  color: var(--black-color);
  border-bottom: 2px solid var(--gray-color);
`;

export const ProductQuanTity = styled.div`
  padding-top: 30px;
  border-bottom: 2px solid var(--gray-color);
`;

export const ProductOrderSummery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  strong {
    font-size: var(--font-lg-size);
    font-weight: var(--font-bold);
  }
`;

export const ProductOrderPrice = styled.div``;

export const ProductTotalPrice = styled.div`
  font-size: var(--font-lg-size);
`;

export const ProductTotalQuanTity = styled.div``;

export const ProductDetailButtonMenu = styled.div``;

export const ProducDetailButtonStyle = css`
  padding: 19px 0;
  margin-top: 22px;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-size: var(--font-lg-size);
  font-weight: var(--font-bold);
`;

export const ProductOrderButton = styled.button`
  ${ProducDetailButtonStyle}
  width: 416px;
  background-color: var(--main-color);
`;

export const ProductAddCartButton = styled.button`
  ${ProducDetailButtonStyle}
  width: 200px;
  background-color: var(--gray-color);
  margin-left: 14px;
`;

export const ProductDetailTabMenu = styled.ul`
  width: 100%;
  display: flex;
  margin-top: 141px;
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
  border-bottom: ${(props) => (props.isActive ? "6px solid var(--black-color)" : "6px solid #e0e0e0")};
`;
export const ProductReviewLink = styled(Link)`
  ${ProductDetailTabLink}
  border-bottom: ${(props) => (props.isActive ? "6px solid var(--black-color)" : "6px solid #e0e0e0")};
`;
export const ProductQnALink = styled(Link)`
  ${ProductDetailTabLink}
  border-bottom: ${(props) => (props.isActive ? "6px solid var(--black-color)" : "6px solid #e0e0e0")};
`;
export const ProductRefundLink = styled(Link)`
  ${ProductDetailTabLink}
  border-bottom: ${(props) => (props.isActive ? "6px solid var(--black-color)" : "6px solid #e0e0e0")};
`;
