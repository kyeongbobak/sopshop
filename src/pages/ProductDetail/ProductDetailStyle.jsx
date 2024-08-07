import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const ProductDetailWrapper = styled.div`
  width: 1280px;
  margin: 81px auto 300px;
`;

export const ProductDetailContent = styled.div`
  display: flex;
`;

export const ProductDetailInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 630px;
  margin-left: 51px;
`;

export const ProductImage = styled.img`
  width: 599px;
`;

export const ProductBrandName = styled.p`
  font-size: var(--font-md-size);
  font-weight: var(--font-bold);
`;

export const ProductName = styled.h2`
  font-family: "Pretendard";
  font-size: var(--font-max-size);
  font-weight: var(--font-extra-light);
  margin-top: 16px;
`;

export const ProductPrice = styled.p`
  font-size: var(--font-max-size);
  margin-top: 20px;

  span {
    font-size: var(--font-lg-size);
    font-weight: var(--font-light);
  }
`;

export const ProductDelivary = styled.div`
  margin-top: 138px;
  padding-bottom: 20px;
  font-family: "Pretendard";
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
    font-size: var(--font-sm-size);
  }
`;

export const ProductOrderSummery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  strong {
    font-size: var(--font-sm-size);
    color: var(--light-black-color);
  }
`;

export const ProductOrderPrice = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductTotalPrice = styled.div`
  font-size: var(--font-max-size);
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
    font-family: "Pretendard";
    font-size: var(--font-sm-size);
  }
`;

export const ProductDetailButtonMenu = styled.div`
  font-weight: var(--font-bold);
`;

export const ProductSoldOutButton = styled.button`
  width: 630px;
  height: 60px;
  background-color: var(--black-color);
  color: var(--white-color);
  font-size: var(--font-md-size);
  text-align: center;
  margin-top: 22px;
`;

export const ProducDetailButtonStyle = css`
  padding: 19px 0;
  margin-top: 22px;
  text-align: center;
  font-size: var(--font-sm-size);
  font-weight: var(--font-medium);
`;

export const ProductOrderButton = styled.button`
  ${ProducDetailButtonStyle}
  width: 416px;
  background-color: var(--black-color);
  /* border: 1px solid #eb9bf9; */
  color: var(--white-color);
`;

export const ProductAddCartButton = styled.button`
  ${ProducDetailButtonStyle}
  width: 200px;
  border: 1px solid var(--black-color);
  margin-left: 8px;
  color: var(--black-color);
`;

export const ProductDetailTabMenu = styled.ul`
  width: 100%;
  /* height: 300px; */
  display: flex;
  margin-top: 141px;
  text-align: center;
  font-size: var(--font-sm-size);
`;
export const TabMenuItem = styled.li`
  width: 100%;
`;

export const TabMenuContents = styled.div`
  font-size: var(--font-md-size);
  padding: 20px;
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
  font-family: "Pretendard";
  border-bottom: ${(props) => (props.isActive ? "6px solid var(--black-color)" : "6px solid #e0e0e0")};
`;
