import styled, { css } from "styled-components";

export const OrderPageWrapper = styled.div`
  width: 1280px;
  margin: 0 auto;
`;

export const OrderPageTitle = styled.h1`
  text-align: center;
  font-size: var(--font-extra-size);
  margin: 54px 0 52px;
`;

export const OrderPageContents = styled.div``;

export const OrderItemWrapper = styled.div``;

export const OrderTotalCost = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 10px;
  p {
    font-size: var(--font-lg-size);
  }

  span {
    font-size: var(--font-max-size);
  }
`;

export const OrderItem = styled.div``;

export const OrderItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 0;
`;

export const OrderItemInfoInner = styled.div`
  display: flex;
`;

export const OrderItemInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 362px;
  margin-left: 26px;
`;

export const OrderItemInfoImage = styled.div`
  img {
    width: 104px;
    border-radius: 10px;
    padding-left: 8px;
  }
`;

export const OrderItemInfoBrandName = styled.div`
  font-size: var(--font-sm-size);
  color: var(--black-color);
`;

export const OrderItemInfoName = styled.div`
  font-size: var(--font-lg-size);
  color: #000;
  padding: 10px 0;
`;

export const OrderItemDiscount = styled.div`
  width: 180px;
  text-align: center;
  font-size: var(--font-lg-size);
`;

export const OrderItemDelivery = styled.div`
  width: 300px;
  text-align: center;
  font-size: var(--font-lg-size);
`;

export const OrderItemInfoPrice = styled.div`
  width: 300px;
  text-align: center;
  font-size: var(--font-lg-size);
`;

export const OrderItemQuantity = styled.div`
  font-size: var(--font-sm-size);
  color: var(--black-color);
`;

export const DeliveryInfoWrapper = styled.div`
  margin-top: 96px;
`;
export const DeliveryInfoTitle = styled.h1`
  font-size: var(--font-max-size);
  border-bottom: 1px solid var(--black-color);
  padding-bottom: 18px;
`;

export const OrderInfoFormTitle = styled.h2`
  font-size: var(--font-lg-size);
  border-bottom: 1px solid var(--black-color);
  padding: 18px 0;
  margin-top: 40px;
`;

export const InfoformCommonStyle = css`
  font-size: var(--font-md-size);
  border-bottom: 1px solid var(--black-color);
  padding: 8px 0;
`;

export const InfoInputCommonStyle = css`
  input {
    width: 334px;
    height: 40px;
    border: 1px solid var(--black-color);
    margin-left: 125px;
  }
`;

export const OrderInfoForm = styled.form``;

export const OrderCustomerName = styled.div`
  ${InfoformCommonStyle}
  ${InfoInputCommonStyle}
  label {
    padding-right: 15px;
  }
`;
export const OrderCustomerPhoneNumber = styled.div`
  ${InfoformCommonStyle}
  label {
    margin-right: 125px;
  }

  input {
    width: 97px;
    height: 40px;
    border: 1px solid var(--black-color);
  }

  span {
    padding: 0 5px;
  }
`;
export const OrderCustomerEmail = styled.div`
  ${InfoformCommonStyle}
  ${InfoInputCommonStyle}
`;

export const DeliveryInfoForm = styled.form``;

export const DeliveryReceiverName = styled.div`
  ${InfoformCommonStyle}
  ${InfoInputCommonStyle}
`;
export const DeliveryReceiverPhoneNumber = styled.div`
  ${InfoformCommonStyle}
  label {
    margin-right: 125px;
  }

  input {
    width: 97px;
    height: 40px;
    border: 1px solid var(--black-color);
  }

  span {
    padding: 0 5px;
  }
`;
export const DeliveryReceiverAdress = styled.div`
  ${InfoformCommonStyle}
`;

export const ZipCodeInput = styled.input`
  width: 800px;
  height: 40px;
  border: 1px solid var(--black-color);
  margin-left: 112px;
  margin-bottom: 8px;
`;

export const ZipCodeSearchButton = styled.input`
  margin-left: 10px;
  width: 154px;
  height: 40px;
  background-color: var(--black-color);
  color: white;
  font-size: var(--font-md-size);
`;

export const RoadAdressInput = styled.input`
  width: 800px;
  height: 40px;
  border: 1px solid var(--black-color);
  margin-left: 167px;
`;

export const DeliveryMessage = styled.div`
  ${InfoformCommonStyle}
  input {
    width: 800px;
    height: 40px;
    border: 1px solid var(--black-color);
    margin-left: 92px;
  }
`;
export const PaymentWrapper = styled.div`
  display: flex;
`;

export const PaymentOptionInner = styled.div`
  width: 760px;
  border-top: 1px solid var(--black-color);
  border-bottom: 1px solid var(--black-color);
  padding: 18px 0;
  font-size: var(--font-md-size);
`;

export const PaymentOptionTitle = styled.div`
  margin: 70px 0 18px;
  font-size: var(--font-max-size);
`;
export const PaymentOption = styled.div`
  input {
    margin-left: 20px;
  }
`;

export const PaymentInfoCommonStyle = css``;

export const PaymentFinalInfo = styled.div`
  width: 480px;
  margin-left: 40px;
`;
export const PaymentFinalInfoTitle = styled.div`
  margin: 70px 0 18px;
  font-size: var(--font-max-size);
`;

export const PaymentFinalInfoCommonStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 18px 0;
`;

export const PaymentFinalInfoInner = styled.div`
  border: 1px solid var(--black-color);
  padding: 30px;

  p {
    font-size: var(--font-md-size);
  }

  span {
    font-size: var(--font-md-size);
    margin-left: 10px;
  }

  button {
    width: 220px;
    height: 68px;
    background-color: var(--black-color);
    color: white;
    font-size: var(--font-max-size);
    margin: 30px 0 0 122px;
  }
`;

export const ProductPriceWrapper = styled.div`
  ${PaymentFinalInfoCommonStyle}
`;

export const ProductPrice = styled.div`
  font-size: var(--font-md-size);
`;

export const DiscounPricePriceWrapper = styled.div`
  ${PaymentFinalInfoCommonStyle}
`;

export const DiscounPrice = styled.div`
  font-size: var(--font-md-size);
`;

export const DeliveryPriceWrapper = styled.div`
  ${PaymentFinalInfoCommonStyle}
`;

export const DeliveryPrice = styled.div`
  font-size: var(--font-md-size);
`;

export const PaymentPriceWrapper = styled.div`
  ${PaymentFinalInfoCommonStyle}
`;

export const PaymentPrice = styled.div`
  font-size: var(--font-md-size);
`;
