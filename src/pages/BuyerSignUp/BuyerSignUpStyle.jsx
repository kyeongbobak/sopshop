import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SignUpWrapper = styled.div`
  width: 550px;
  margin: 74px auto;
`;

export const FormBox = styled.div``;

export const SiteLogo = styled(Link)`
  display: block;
  text-align: center;
  margin-bottom: 70px;
  cursor: pointer;
`;

export const UserTypeTabs = styled.ul`
  display: table;
  width: 100%;
  font-size: var(--font-lg-size);
  text-align: center;
`;

export const SignUpTab = styled.li`
  display: table-cell;
`;

export const SignUpTabLink = css`
  display: block;
  height: 67px;
  padding-top: 20px;
  background-color: var(--light-gray-color);
  border: 1px solid var(--gray-color);
  border-radius: 10px 10px 0px 0px;
  box-sizing: border-box;
  border-bottom: 0;
  position: relative;
  z-index: 2;
`;

export const activeTab = css`
  background-color: white;
  z-index: 4;
`;

export const BuyerLoginSignUp = styled(Link)`
  ${SignUpTabLink}
  ${(props) => props.isActive && activeTab}
  border-right: ${(props) => (props.isActive ? 0 : "1px solid var(--gray-color)")};
`;

export const SellerLoginSignUp = styled(Link)`
  ${SignUpTabLink}
  ${(props) => props.isActive && activeTab}
  border-left : ${(props) => (props.isActive ? 0 : "1px solid var(var(--gray-color))")}
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 36px 35px;
  border: 1px solid var(--gray-color);
  border-radius: 10px;
  background-color: white;
  position: relative;
  z-index: 3;
  margin-top: -8px;
`;

export const Label = styled.label`
  padding: 12px 0;
  font-size: var(--font-md-size);
`;

export const UserIdInputWrapper = styled.div`
  display: flex;
`;

export const UserIdInput = styled.input`
  flex-grow: 1;
  height: 54px;
  border: 1px solid var(--gray-color);
  border-radius: 5px;
  font-size: var(--font-md-size);
`;

export const UserIdDupicateButton = styled.button`
  padding: 17px 37px;
  margin-left: 12px;
  border-radius: 5px;
  background-color: var(--main-color);
  font-size: var(--font-md-size);
  color: white;
  text-align: center;
`;

export const StyledInput = styled.input`
  height: 54px;
  border: 1px solid var(--gray-color);
  border-radius: 5px;
  font-size: var(--font-md-size);
`;

export const PhoneNumberWrapper = styled.div`
  padding-top: 12px;
`;

export const PhoneStyledInputWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 12px;

  select {
    width: 146px;
    height: 54px;
    border: 1px solid var(--gray-color);
    border-radius: 5px;
    text-align: center;
    font-size: var(--font-md-size);
  }
`;

export const PhoneStyledInput = styled.input`
  width: 146px;
  height: 54px;
  border: 1px solid var(--gray-color);
  border-radius: 5px;
  font-size: var(--font-md-size);
`;

export const SignUpRegistrationSection = styled.div`
  text-align: center;
`;

export const SignUpAgreementWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 34px 0;
  font-size: var(--font-md-size);

  p {
    text-align: left;
  }

  strong {
    font-weight: var(--font-bold);
    text-decoration: underline;
  }
`;

export const SignUpAgreementInput = styled.input``;
