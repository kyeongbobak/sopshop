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
  PrefixNumberSelect,
  PrefixNumberInput,
  PhoneStyledInputWrapper,
  PhoneStyledInput,
  SignUpRegistrationSection,
  SignUpAgreementWrapper,
  SignUpAgreementInput,
} from "./BuyerSignUpStyle";
import { useState, useRef } from "react";
// import PullUpIcon from "../../assets/icon-up-arrow.png";
import DropDownIcon from "../../assets/icon-down-arrow.png";
import DropDownItem from "../../components/DropDownItem/DropDownItem";
export default function BuyerSignUp() {
  const [activeTab, setActiveTab] = useState("buyer");
  const dropDownRef = useRef();
  const [isOpen, setIsOpen] = useState(dropDownRef, false);
  const [phoneIdentify, setPhoneIdentify] = useState("010");
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
                <PrefixNumberSelect ref={dropDownRef}>
                  <PrefixNumberInput value={phoneIdentify} />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(!isOpen);
                    }}
                  >
                    <img src={DropDownIcon} alt="" />
                  </button>
                </PrefixNumberSelect>
                {isOpen && (
                  <ul>
                    {phoneList.map((value, index) => (
                      <DropDownItem key={index} value={value} setIsOpen={setIsOpen} setPhoneIdentify={setPhoneIdentify} isOpen={isOpen} />
                    ))}
                  </ul>
                )}
                <PhoneStyledInput id="userPhoneNumberOtherPart" type="text" />
                <PhoneStyledInput id="userPhoneNumberTheOtherPart" type="text" />
              </PhoneStyledInputWrapper>
            </PhoneNumberWrapper>
          </SignUpForm>
        </FormBox>
        <SignUpRegistrationSection>
          <SignUpAgreementWrapper>
            <SignUpAgreementInput />
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
