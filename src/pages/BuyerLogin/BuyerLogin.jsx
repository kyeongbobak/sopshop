import LogoImage from "../../assets/Logo-hodu.png";
import { useState } from "react";
import { LoginWrapper, FormBox, SiteLogo, LoginForm, Label, StyledInput, LoginButton, LinkContainer, StyledLink, UserTypeTabs, LoginTab, SellerLoginTabLink, BuyerLoginTabLink } from "./BuyerLoginStyle";

export default function BuyerLogin() {
  const [activeTab, setActiveTab] = useState("buyer");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
          <LoginForm>
            <Label className="a11y-hidden" htmlFor="UserId">
              아이디
            </Label>
            <StyledInput type="id" placeholder="아이디" />
            <Label className="a11y-hidden" htmlFor="UserPassword">
              비밀번호
            </Label>
            <StyledInput type="password" placeholder="비밀번호" />
            <LoginButton>로그인</LoginButton>
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
