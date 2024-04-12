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
  font-weight: var(--font-light);
  margin-top: 16px;
`;

export const ProductPrice = styled.p`
  font-size: var(--font-extra-size);
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
  border-bottom: 1px solid var(--gray-color);
`;

export const ProductQuanTityWrapper = styled.div`
  padding: 30px 0;
  border-bottom: 3px solid var(--gray-color);
  text-align: center;
`;

export const ProductQuanTity = styled.div`
  margin-top: 32px;
`;

export const ProductQuanTityInner = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  border: 1px solid var(--gray-color);
  padding: 15px 0;
  text-align: center;
  button {
    width: 50px;
  }
  p {
    width: 50px;
    font-size: var(--font-lg-size);
  }
`;

export const ProductOrderSummery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  strong {
    font-size: var(--font-lg-size);
    color: var(--light-black-color);
  }
`;

export const ProductOrderPrice = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductTotalPrice = styled.div`
  font-size: var(--font-extra-size);
  p {
    &::before {
      display: inline-block;
      content: "";
      width: 2px;
      height: 23px;
      background-color: var(--main-color);

      margin: 0 12px;
    }
  }

  span {
    font-size: var(--font-lg-size);
    padding-left: 3px;
  }
`;

export const ProductTotalQuanTity = styled.div`
  p {
    font-size: var(--font-lg-size);
  }
`;

export const ProductDetailButtonMenu = styled.div`
  font-weight: var(--font-bold);
`;

export const ProducDetailButtonStyle = css`
  padding: 19px 0;
  margin-top: 22px;
  text-align: center;
  font-size: var(--font-lg-size);
`;

export const ProductOrderButton = styled.button`
  ${ProducDetailButtonStyle}
  width: 416px;
  border: 1px solid var(--main-color);
  color: var(--main-color);
`;

export const ProductAddCartButton = styled.button`
  ${ProducDetailButtonStyle}
  width: 200px;
  border: 1px solid var(--gray-color);
  margin-left: 8px;
  color: var(--gray-color);
`;

export const ProductDetailTabMenu = styled.ul`
  width: 100%;
  height: 300px;
  display: flex;
  margin-top: 141px;
  text-align: center;
  font-size: var(--font-lg-size);
`;
export const TabMenuItem = styled.li`
  width: 100%;
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
