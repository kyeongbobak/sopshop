import LogoImage from "../../assets/Logo-hodu.png";
import {
  SignUpWrapper,
  SiteLogo,
  FormBox,
  UserTypeTabs,
  SignUpTab,
  BuyerLoginSignUp,
  SellerLoginSignUp,
  SignUpForm,
  SignUpFormSection,
  UserIdInputWrapper,
  UserIdInput,
  UserIdDupicateButton,
  PassWordInputWrapper,
  PassWordInput,
  PassWordCheckInput,
  Label,
  StyledInput,
  PhoneNumberWrapper,
  PrefixNumberInput,
  PhoneStyledInputWrapper,
  PhoneNumberStyledInput,
  SignUpRegistrationSection,
  SignUpAgreementWrapper,
  SignUpButton,
  SignUpAgreementCheckBox,
  ValidateMessage,
} from "./BuyerSignUpStyle";
import { useState } from "react";
import DropDownIcon from "../../assets/icon-down-arrow.png";
import PullUpIcon from "../../assets/icon-up-arrow.png";
import CheckOffIcon from "../../assets/icon-check-off.png";
import CheckOnIcon from "../../assets/icon-check-on.png";

export default function BuyerSignUp() {
  const [activeTab, setActiveTab] = useState("buyer");
  const [isOpen, setIsOpen] = useState(false);
  const [isClickedOption, setIsClickedOption] = useState("010");
  const phoneList = ["010", "011", "016", "017", "018", "019"];
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPassWordCheck, setUserPassWordCheck] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumberMiddle, setPhoneNumberMiddle] = useState("");
  const [phoneNumberEnd, setPhonNumberEnd] = useState("");
  const [DuplicateMessage, setDuplicateMessage] = useState("");
  const [passWordWarningMessage, setPassWordWarningMessage] = useState("");
  const [userNameWarningMessage, setUserNameWarningMessage] = useState("");
  const [phoneNumberWarningMessage, setPhoneNumberWarningMessage] = useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const phoneNumber = isClickedOption.concat(phoneNumberMiddle).concat(phoneNumberEnd);

  const body = {
    username: userId,
    password: userPassword,
    password2: userPassWordCheck,
    phone_number: phoneNumber,
    name: userName,
  };

  const verifyAccount = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://openmarket.weniv.co.kr/accounts/signup/valid/username/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username: userId }),
      });
      const data = await res.json();
      console.log(data);
      if (data.Success) {
        setDuplicateMessage(data.Success);
      } else if (!userId) {
        setDuplicateMessage(data.FAIL_Message);
      } else if (data.FAIL_Message) {
        setDuplicateMessage("해당 사용자 아이디는 이미 존재합니다.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://openmarket.weniv.co.kr/accounts/signup/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!userPassword && !userPassWordCheck) {
        setPassWordWarningMessage("이 필드는 blank일 수 없습니다.");
      } else if (userPassword.length < 8 && userPassWordCheck.length < 8) {
        setPassWordWarningMessage("비밀번호는 8자 이상이어야 합니다.");
      } else if (userPassword.search(/[a-z]/gi) < 0 && userPassWordCheck.search(/[a-z]/gi) < 0) {
        setPassWordWarningMessage("비밀번호는 한개 이상의 영소문자가 필수적으로 들어가야 합니다.");
      } else if (userPassword.search(/[0-9]/g) < 0 && userPassWordCheck.search(/[0-9]/g) < 0) {
        setPassWordWarningMessage("비밀번호는 한개 이상의 숫자가 필수적으로 들어가야 합니다.");
      }

      if (20 < userId.length || /^[a-zA-Z0-9]$/.test(userId)) {
        setUserNameWarningMessage("ID는 20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.");
      } else if (!userId) {
        setUserNameWarningMessage(data.username[0]);
      }

      if (!phoneNumberMiddle || !phoneNumberEnd) {
        setPhoneNumberWarningMessage("이 필드는 blank일 수 없습니다.");
      } else if (!/^01[0-9]{8,10}$/.test(phoneNumber)) {
        setPhoneNumberWarningMessage("핸드폰번호는 01*으로 시작해야 하는 10~11자리 숫자여야 합니다.");
      } else if (data.phone_number) {
        setPhoneNumberWarningMessage("해당 사용자 전화번호는 이미 존재합니다.");
      }
    } catch (error) {
      console.log(error);
    }
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
            <SignUpFormSection>
              <Label htmlFor="userId">아이디</Label>
              <UserIdInputWrapper>
                <UserIdInput id="userId" type="text" onChange={(e) => setUserId(e.target.value)} value={userId} isUserIdError={DuplicateMessage === "username 필드를 추가해주세요 :)" || DuplicateMessage === "해당 사용자 아이디는 이미 존재합니다."} />
                <UserIdDupicateButton onClick={verifyAccount}>중복확인</UserIdDupicateButton>
              </UserIdInputWrapper>
              {DuplicateMessage ? <ValidateMessage isDuplicate={DuplicateMessage === "username 필드를 추가해주세요 :)" || DuplicateMessage === "해당 사용자 아이디는 이미 존재합니다."}>{DuplicateMessage}</ValidateMessage> : ""}
              {userNameWarningMessage ? <ValidateMessage>{userNameWarningMessage}</ValidateMessage> : ""}
              <PassWordInputWrapper>
                <Label htmlFor="userPassword">비밀번호</Label>
                <PassWordInput id="userPassWord" type="password" onChange={(e) => setUserPassword(e.target.value)} value={userPassword} />
                {userPassword ? <img src={CheckOnIcon} alt="" /> : <img src={CheckOffIcon} alt="" />}
              </PassWordInputWrapper>
              <PassWordInputWrapper>
                <Label htmlFor="userPassWordCheck">비밀번호 재확인</Label>
                <PassWordCheckInput id="userPassWordCheck" type="password" onChange={(e) => setUserPassWordCheck(e.target.value)} value={userPassWordCheck} isPassWordError={passWordWarningMessage !== ""} />
                {userPassWordCheck ? <img src={CheckOnIcon} alt="" /> : <img src={CheckOffIcon} alt="" />}
                {passWordWarningMessage ? <ValidateMessage isPassWordError={passWordWarningMessage !== ""}>{passWordWarningMessage}</ValidateMessage> : ""}
              </PassWordInputWrapper>
              <Label htmlFor="userName">이름</Label>
              <StyledInput id="userName" type="text" onChange={(e) => setUserName(e.target.value)} value={userName} />

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
                  <PhoneNumberStyledInput id="userPhoneNumberOther" type="text" onChange={(e) => setPhoneNumberMiddle(e.target.value)} value={phoneNumberMiddle} />
                  <PhoneNumberStyledInput id="userPhoneNumberTheOther" type="text" onChange={(e) => setPhonNumberEnd(e.target.value)} value={phoneNumberEnd} />
                </PhoneStyledInputWrapper>
                {phoneNumberWarningMessage ? <ValidateMessage>{phoneNumberWarningMessage}</ValidateMessage> : ""}
              </PhoneNumberWrapper>
            </SignUpFormSection>
            <SignUpRegistrationSection>
              <SignUpAgreementWrapper>
                <Label className="a11y-hidden" htmlFor="chk">
                  인증 약관 전체 동의
                </Label>
                <SignUpAgreementCheckBox type="checkbox" id="chk"></SignUpAgreementCheckBox>
                <p>
                  호두샵의 <strong>이용약관</strong>및 <strong>개인정보처리방침</strong>에 대한 내용을 확인하였고 동<br />
                  의합니다.
                </p>
              </SignUpAgreementWrapper>
              <SignUpButton type="submit">가입하기</SignUpButton>
            </SignUpRegistrationSection>
          </SignUpForm>
        </FormBox>
      </SignUpWrapper>
    </>
  );
}
