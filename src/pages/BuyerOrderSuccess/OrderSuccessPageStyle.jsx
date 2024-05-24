import styled from "styled-components";

export const OrderSuccessPageWrapper = styled.div`
  width: 1280px;
  margin: 0 auto 300px;
  text-align: center;
`;

export const OrderSuccessPageTitle = styled.div`
  text-align: center;
  margin: 54px 0 52px;
  border-bottom: 1px solid var(--black-color);
  padding: 20px 0 52px 0;
  font-size: var(--font-extra-size);
`;

export const OrderSuccessPageContents = styled.div`
  margin: 200px 0;
`;

export const OrderSuccessMessage = styled.div`
  font-size: var(--font-extra-size);
`;

export const OrderDate = styled.div`
  font-size: var(--font-max-size);
  margin-top: 10px;
  span {
    color: var(--light-black-color);
  }
`;

export const DeliveryInfoWrapper = styled.div`
  text-align: left;

  span {
    margin-right: 20px;
  }

  span:nth-child(2) {
    margin-right: 10px;
  }

  div {
    font-size: var(--font-lg-size);
    padding-bottom: 10px;
  }
`;

export const DeliveryInfoInner = styled.div`
  margin: 30px 0 30px;
  border-bottom: 1px solid var(--black-color);
`;

export const DeliveryInfoTitle = styled.h4`
  font-size: var(--font-lg-size);
  font-weight: bold;
  border-bottom: 1px solid var(--black-color);
  padding-bottom: 20px;
`;

export const DeliveryReceiver = styled.div`
  span:nth-child(2) {
    margin-left: 20px;
  }
`;

export const DeliveryReceiverAdress = styled.div`
  span:nth-child(2) {
    margin-left: 20px;
  }
`;

export const OrderPrice = styled.div``;

export const PaymentMethod = styled.div``;
