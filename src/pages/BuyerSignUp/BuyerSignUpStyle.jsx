import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SignUpWrapper = styled.div`
  width: 550px;
  margin: 200px auto;
  font-family: "Pretendard";
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

export const SignUpForm = styled.form``;

export const SignUpFormSection = styled.div`
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

export const commonInputStyled = css`
  height: 54px;
  border-radius: 5px;
  font-size: var(--font-md-size);
`;

export const StyledInput = styled.input`
  ${commonInputStyled}
  border: 1px solid var(--gray-color);
`;

export const UserIdInputWrapper = styled.div`
  display: flex;
`;

export const UserIdInput = styled.input`
  ${commonInputStyled}
  border: ${(props) => (props.isUserIdError ? "1px solid red" : "1px solid var(--gray-color)")};
  flex-grow: 1;
`;

export const UserIdDupicateButton = styled.button`
  padding: 17px 37px;
  margin-left: 12px;
  border-radius: 5px;
  background-color: var(--main-color);
  font-size: var(--font-md-size);
  color: var(--white-color);
  text-align: center;
`;

export const PassWordInputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 28px;
    margin-left: 430px;
    margin-top: 55px;
    position: absolute;
  }
`;

export const PassWordInput = styled.input`
  ${commonInputStyled}
  border: 1px solid var(--gray-color);
`;

export const PassWordCheckInput = styled.input`
  ${commonInputStyled}
  border: ${(props) => (props.isPassWordError ? "1px solid red" : "1px solid var(--gray-color)")};
`;

export const PhoneNumberWrapper = styled.div`
  padding-top: 12px;
`;

export const PhoneStyledInputWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding-top: 12px;
  position: relative;

  button {
    position: absolute;
    margin-left: 125px;
    margin-top: 17px;
  }

  ul {
    width: 150px;
    height: 150px;
    position: absolute;
    margin-top: 63px;
    border: 1px solid var(--gray-color);
    border-radius: 5px;
    font-size: var(--font-md-size);
    text-align: center;
    overflow-y: auto;
    background-color: white;
  }

  ul::-webkit-scrollbar {
    width: 12px;
  }

  ul::-webkit-scrollbar-track {
    background: var(--light-gray-color);
  }

  ul::-webkit-scrollbar-thumb {
    background: var(--gray-color);
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }

  li {
    padding: 10px 0;
    overflow: auto;
    cursor: pointer;
  }

  li:hover {
    background-color: #e0e0e0;
  }
`;

export const PrefixNumberInput = styled.input`
  width: 146px;
  border: 1px solid var(--gray-color);
  border-radius: 5px;
  height: 54px;
  text-align: center;
  font-size: var(--font-md-size);
`;

export const PhoneNumberStyledInput = styled.input`
  width: 146px;
  border: 1px solid var(--gray-color);
  border-radius: 5px;
  height: 54px;
  font-size: var(--font-md-size);
  text-align: center;
`;

export const SignUpRegistrationSection = styled.div`
  text-align: center;
`;

export const SignUpAgreementWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 10px;
  padding: 34px 0;
  font-size: var(--font-md-size);

  p {
    font-family: "Pretendard";
    text-align: left;
    line-height: 20px;
  }

  strong {
    font-weight: var(--font-bold);
    text-decoration: underline;
  }
`;

export const SignUpButton = styled.button`
  width: 480px;
  height: 60px;
  border-radius: 5px;
  color: white;
  font-family: "GmarketSans";
  font-size: var(--font-sm-size);
  background-color: ${(props) => (props.isSignUp ? "var(--main-color)" : "var(--gray-color)")};
`;

export const SignUpAgreementCheckBox = styled.input`
  appearance: none;
  width: 15px;
  height: 16px;
  border: 1px solid #bbb;
  cursor: pointer;
  position: relative;

  &:checked {
    border: 1px solid var(--black-color);
  }

  &:checked::after {
    content: "";
    display: inline-block;
    width: 6px;
    height: 10px;
    border-style: solid;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    margin: 0px 0px 3px 3px;
  }
`;

export const ValidateMessage = styled.p`
  padding-top: 12px;
  font-family: "Pretendard";
  font-weight: var(--font-medium);
  font-size: var(--font-md-size);
  color: ${(props) => (props.isDuplicate || props.isPassWordError ? "red" : "var(--black-color)")};
`;
