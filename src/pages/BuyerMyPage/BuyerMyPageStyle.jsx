import styled from "styled-components";
import { Link } from "react-router-dom";
import { css } from "styled-components";

export const BuyerMyPageWrapper = styled.div`
  width: 1280px;
  margin: 0px auto;
  font-family: "Pretendard";
`;

export const BuyerMyPageTitle = styled.div`
  font-size: var(--font-lg-size);
  margin: 54px 0 52px;
  text-align: center;
  font-family: "GmarketSans";
`;

export const BuyerMyPageHeader = styled.ul`
  display: flex;

  font-size: var(--font-sm-size);
  border-top: 1px solid var(--black-color);
  border-bottom: 1px solid var(--black-color);
  padding: 20px 0;

  text-align: center;

  li {
    width: 152px;
  }

  li:nth-child(1) {
  }

  li:nth-child(2) {
    width: 368px;
  }
`;

export const BuyerMyPageContents = styled.div``;

export const OrderRecordsWrapper = styled.div``;

export const OrderRecordsItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const OrderRecordsItemStyle = css`
  font-size: var(--font-sm-size);
  flex-grow: 1;
  width: 152px;
  text-align: center;
  font-family: "Pretendard";
`;

export const OrderNumber = styled.div`
  ${OrderRecordsItemStyle}
`;

export const ProductImage = styled.div`
  img {
    width: 190px;
  }
  width: 368px;
  text-align: center;
`;

export const ProductInfo = styled.div`
  ${OrderRecordsItemStyle}
  line-height: 22px;
  p {
    font-family: "Pretendard";
  }
  p:nth-child(1) {
    font-weight: var(--font-semi-bold);
  }
`;

export const ProductPrice = styled.p`
  ${OrderRecordsItemStyle}
`;

export const ProductQauntity = styled.p`
  ${OrderRecordsItemStyle}
`;

export const DeliveryStatus = styled.p`
  ${OrderRecordsItemStyle}
`;

export const ShippingOption = styled.div`
  ${OrderRecordsItemStyle}
`;

export const PrevButtonWrapper = styled(Link)`
  display: flex;
  justify-content: end;
`;

export const PrevButton = styled.button`
  width: 166px;
  height: 54px;
  background-color: var(--black-color);
  color: var(--white-color);
  font-size: var(--font-md-size);
  text-align: center;
  float: right;
  margin-bottom: 300px;
`;
