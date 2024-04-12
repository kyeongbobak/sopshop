import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const LoginWrapper = styled.div`
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

export const LoginTab = styled.li`
  display: table-cell;
`;

const LoginTabLink = css`
  display: block;
  cursor: pointer;
  position: relative;
  height: 67px;
  padding-top: 20px;
  border: 1px solid var(--gray-color);
  background-color: var(--light-gray-color);
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 0;
  z-index: 2;
`;

const activeTab = css`
  background-color: white;
  z-index: 4;
  border: 1px solid var(--gray-color);
  border-bottom: 0;
`;

export const BuyerLoginTabLink = styled(Link)`
  ${LoginTabLink}
  ${(props) => props.isActive && activeTab} 
  border-right: ${(props) => (props.isActive ? 0 : "1px solid var(--gray-color)")};
`;

export const SellerLoginTabLink = styled(Link)`
  ${LoginTabLink}
  ${(props) => props.isActive && activeTab} 
    border-left: ${(props) => (props.isActive ? 0 : "1px solid var(--gray-color)")};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray-color);
  border-radius: 10px;
  padding: 35px;
  text-align: center;
  background-color: white;
  z-index: 3;
  margin-top: -8px;
  position: relative;
`;

export const Label = styled.label``;

export const StyledInput = styled.input`
  border-bottom: 1px solid var(--gray-color);
  padding: 20px 0;
  font-size: var(--font-md-size);
`;

export const LoginButton = styled.button`
  margin-top: 36px;
  padding: 19px 213px;
  border-radius: 5px;
  background-color: var(--black-color);
  color: white;
  font-size: var(--font-lg-size);
`;

export const LinkWrapper = styled.div`
  margin-top: 30px;
  font-size: var(--font-md-size);

  text-align: center;
  cursor: pointer;

  span {
    padding: 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--dark-gray-color);
`;

export const ValidateMessage = styled.p`
  color: red;
  text-align: left;
  padding-top: 25px;
  font-size: var(--font-sm-size);
`;
