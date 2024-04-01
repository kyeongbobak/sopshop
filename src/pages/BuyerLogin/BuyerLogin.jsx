import LogoImage from "../../assets/Logo-hodu.png";
import { useState } from "react";
import { LoginWrapper, FormBox, SiteLogo, LoginForm, Label, StyledInput, LoginButton, LinkWrapper, StyledLink, UserTypeTabs, LoginTab, SellerLoginTabLink, BuyerLoginTabLink, ValidateMessage } from "./BuyerLoginStyle";
import { useNavigate } from "react-router-dom";

export default function BuyerLogin() {
  const [activeTab, setActiveTab] = useState("buyer");
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const navigate = useNavigate();

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
      login_type: "BUYER",
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
        navigate("/mainPage");
      } else if (!userId && !userPassword) {
        setWarningMessage("아이디를 입력해주세요");
      } else if (userId && !userPassword) {
        setWarningMessage("비밀번호를 입력해주세요");
      } else if (!data.id) {
        setWarningMessage("아이디 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <LoginWrapper>
        <SiteLogo to={"/mainPage"}>
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
            {warningMessage ? <ValidateMessage>{warningMessage}</ValidateMessage> : ""}
            <LoginButton type="submit">로그인</LoginButton>
          </LoginForm>
        </FormBox>
        <LinkWrapper>
          <StyledLink to={"/signUp"}>회원가입</StyledLink>
          <span>|</span>
          <StyledLink>비밀번호 찾기</StyledLink>
        </LinkWrapper>
      </LoginWrapper>
    </>
  );
}
