import LogoImage from "../../assets/Logo-hodu.png";
import { useState } from "react";
import { LoginWrapper, FormBox, SiteLogo, LoginForm, Label, StyledInput, LoginButton, LinkContainer, StyledLink, UserTypeTabs, LoginTab, SellerLoginTabLink, BuyerLoginTabLink, ValidateMessage } from "./BuyerLoginStyle";

export default function BuyerLogin() {
  const [activeTab, setActiveTab] = useState("buyer");
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const handleTabClick = (e) => {
    setActiveTab(e);
  };

  const inputHandler = (e) => {
    if (e.target.id === "userId") {
      setUserId(e.target.value);
    }

    if (e.target.id === "userPassword") {
      setUserPassword(e.target.value);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const body = {
      username: userId,
      password: userPassword,
      login_type: "BUYER", // BUYER : 일반 구매자, SELLER : 판매자
    };

    try {
      const res = await fetch("https://openmarket.weniv.co.kr/accounts/login/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      console.log(data);
      if (data.id) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("id", data.id);
        setWarningMessage("");
      } else if (!userId && !userPassword) {
        setWarningMessage("아이디를 입력하지 않았습니다.");
      } else if (!userId && userPassword) {
        setWarningMessage("아이디를 입력하지 않았습니다.");
      } else if (userId && !userPassword) {
        setWarningMessage("비밀번호를 입력하지 않았습니다.");
      } else if (!data.id) {
        setWarningMessage(data.FAIL_Message);
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <LoginWrapper>
        <SiteLogo>
          <img src={LogoImage} alt="" />
        </SiteLogo>
        <FormBox>
          <UserTypeTabs>
            <LoginTab>
              <BuyerLoginTabLink onClick={() => handleTabClick("buyer")} isActive={activeTab === "buyer"}>
                구매회원 로그인
              </BuyerLoginTabLink>
            </LoginTab>
            <LoginTab>
              <SellerLoginTabLink onClick={() => handleTabClick("seller")} isActive={activeTab === "seller"}>
                판매회원 로그인
              </SellerLoginTabLink>
            </LoginTab>
          </UserTypeTabs>
          <LoginForm onSubmit={onSubmitHandler}>
            <Label className="a11y-hidden" htmlFor="userId">
              아이디
            </Label>
            <StyledInput id="userId" type="text" placeholder="아이디" value={userId} onChange={inputHandler} />
            <Label className="a11y-hidden" htmlFor="userPassword">
              비밀번호
            </Label>
            <StyledInput id="userPassword" type="password" placeholder="비밀번호" value={userPassword} onChange={inputHandler} />
            <LoginButton type="submit">로그인</LoginButton>
            <ValidateMessage>{warningMessage}</ValidateMessage>
          </LoginForm>
        </FormBox>
        <LinkContainer>
          <StyledLink>회원가입</StyledLink>
          <span>|</span>
          <StyledLink>비밀번호 찾기</StyledLink>
        </LinkContainer>
      </LoginWrapper>
    </>
  );
}
