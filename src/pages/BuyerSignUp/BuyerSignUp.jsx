import { useState } from "react";
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
  PhoneStyledInputWrapper,
  PhoneStyledInput,
  SignUpRegistrationSection,
  SignUpAgreementWrapper,
  SignUpAgreementInput,
} from "./BuyerSignUpStyle";

export default function BuyerSignUp() {
  const [activeTab, setActiveTab] = useState("buyer");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const onSubmitHandler = (e) => {
    e.preventdefault();
  };

  return (
    <>
      <SignUpWrapper>
        <SiteLogo>
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
                <PhoneStyledInput type="text" />
                <PhoneStyledInput type="text" />
                <PhoneStyledInput type="text" />
              </PhoneStyledInputWrapper>
            </PhoneNumberWrapper>
          </SignUpForm>
        </FormBox>
        <SignUpRegistrationSection>
          <SignUpAgreementWrapper>
            <SignUpAgreementInput type="checkbox" />
            <p>
              호두샵의 <strong>이용약관</strong>및 <strong>개인정보처리방침</strong>에 대한 내용을 확인하였고 동<br />
              의합니다.
            </p>
          </SignUpAgreementWrapper>
          <Button MButton disabled>
            가입하기
          </Button>
        </SignUpRegistrationSection>
      </SignUpWrapper>
    </>
  );
}
