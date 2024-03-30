import LogoImage from "../../assets/Logo-hodu.png";
import Button from "../../components/Button/Button";
import {
  SignUpWrapper,
  SiteLogo,
  FormBox,
  UserTypeTabs,
  SignUpTab,
  BuyerLoginSignUp,
  SellerLoginSignUp,
  SignUpForm,
  UserIdInputWrapper,
  UserIdInput,
  UserIdDupicateButton,
  Label,
  StyledInput,
  PhoneNumberWrapper,
  PrefixNumberInput,
  PhoneStyledInputWrapper,
  PhoneStyledInput,
  SignUpRegistrationSection,
  SignUpAgreementWrapper,
  SignUpButton,
  SignUpAgreementCheckBox,
} from "./BuyerSignUpStyle";
import { useState } from "react";
import DropDownIcon from "../../assets/icon-down-arrow.png";
import PullUpIcon from "../../assets/icon-up-arrow.png";
import checkBoxIcon from "../../assets/check-box.png";

export default function BuyerSignUp() {
  const [activeTab, setActiveTab] = useState("buyer");
  const [isOpen, setIsOpen] = useState(false);
  const [isClickedOption, setIsClickedOption] = useState("010");

  const phoneList = ["010", "011", "016", "017", "018", "019"];
  // const [userId, setUserId] = useState("");
  // const [userPassword, setuserPassword] = useState("");
  // const [userPassWordCheck, setuserPassWordCheck] = useState("");
  // const [userName, setUserName] = useState("");
  // const [userPhoneNumber, setUserPhoneNumber] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const onSubmitHandler = (e) => {
    e.preventdefault();
  };

  return (
    <>
      <SignUpWrapper>
        <SiteLogo to={"/mainPage"}>
          <img src={LogoImage} alt="" />
        </SiteLogo>
        <FormBox>
          <UserTypeTabs>
            <SignUpTab>
              <BuyerLoginSignUp onClick={() => handleTabClick("buyer")} isActive={activeTab === "buyer"}>
                구매회원 가입
              </BuyerLoginSignUp>
            </SignUpTab>
            <SignUpTab>
              <SellerLoginSignUp onClick={() => handleTabClick("seller")} isActive={activeTab === "seller"}>
                판매회원 가입
              </SellerLoginSignUp>
              {isOpen && <ul>{}</ul>}
            </SignUpTab>
          </UserTypeTabs>
          <SignUpForm onSubmit={onSubmitHandler}>
            <Label htmlFor="userId">아이디</Label>
            <UserIdInputWrapper>
              <UserIdInput id="userId" type="text" />
              <UserIdDupicateButton>중복확인</UserIdDupicateButton>
            </UserIdInputWrapper>
            <Label htmlFor="userPassword" typeof="password">
              비밀번호
            </Label>
            <StyledInput id="userPassWord" />
            <Label htmlFor="userPassWordCheck">비밀번호 재확인</Label>
            <StyledInput id="userPassWordCheck" type="password" />
            <Label htmlFor="userName">이름</Label>
            <StyledInput id="userName" type="text" />
            <PhoneNumberWrapper>
              <Label htmlFor="userPhoneNumber">휴대전화번호</Label>
              <PhoneStyledInputWrapper>
                <PrefixNumberInput value={isClickedOption} />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                  }}
                >
                  {isOpen ? <img src={DropDownIcon} alt="drop-down-icon" /> : <img src={PullUpIcon} alt="pull-up-icon" />}
                </button>
                {isOpen && (
                  <ul>
                    {phoneList.map((value, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setIsClickedOption(value);
                          setIsOpen(false);
                        }}
                      >
                        {value}
                      </li>
                    ))}
                  </ul>
                )}
                <PhoneStyledInput id="userPhoneNumberOther" type="text" />
                <PhoneStyledInput id="userPhoneNumberTheOther" type="text" />
              </PhoneStyledInputWrapper>
            </PhoneNumberWrapper>
          </SignUpForm>
        </FormBox>
        <SignUpRegistrationSection>
          <SignUpAgreementWrapper>
            <Label htmlFor="chk">이름</Label>
            <SignUpAgreementCheckBox id="chk"></SignUpAgreementCheckBox>
            <p>
              호두샵의 <strong>이용약관</strong>및 <strong>개인정보처리방침</strong>에 대한 내용을 확인하였고 동<br />
              의합니다.
            </p>
          </SignUpAgreementWrapper>
          <SignUpButton>가입하기</SignUpButton>
        </SignUpRegistrationSection>
      </SignUpWrapper>
    </>
  );
}
