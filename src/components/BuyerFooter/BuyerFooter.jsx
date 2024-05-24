import { Footer, FooterWrapper, FooterMenuWrap, FooterLinkMenu, FooterLink, StyledLink, StyledBoldLink, FooterTop, FooterBottom, FooterSnsWrap, FooterSns, FooterSnsLink } from "./BuyerFooterStyle";
import InstagramIcon from "../../assets/img/icon-insta.png";
import FaceBookIcon from "../../assets/img/icon-fb.png";
import YouTuBeIcon from "../../assets/img/icon-yt.png";

export default function BuyerFooter() {
  return (
    <Footer>
      <FooterWrapper>
        <FooterTop>
          <FooterMenuWrap>
            <FooterLinkMenu>
              <FooterLink>
                <StyledLink to="">sopshop 소개</StyledLink>
              </FooterLink>
              <FooterLink>
                <StyledLink to="">이용약관</StyledLink>
              </FooterLink>
              <FooterLink>
                <StyledBoldLink to="">개인정보처리방침</StyledBoldLink>
              </FooterLink>
              <FooterLink>
                <StyledLink to="">전자금융거래약관</StyledLink>
              </FooterLink>
              <FooterLink>
                <StyledLink to="">청소년보호정책</StyledLink>
              </FooterLink>
              <FooterLink>
                <StyledLink to="">제휴문의</StyledLink>
              </FooterLink>
            </FooterLinkMenu>
          </FooterMenuWrap>
          <FooterSnsWrap>
            <FooterSns>
              <FooterSnsLink>
                <StyledLink to="">
                  <img src={InstagramIcon} alt="" />
                </StyledLink>
              </FooterSnsLink>
              <FooterSnsLink>
                <StyledLink to="">
                  <img src={FaceBookIcon} alt="" />
                </StyledLink>
              </FooterSnsLink>
              <FooterSnsLink>
                <StyledLink to="">
                  <img src={YouTuBeIcon} alt="" />
                </StyledLink>
              </FooterSnsLink>
            </FooterSns>
          </FooterSnsWrap>
        </FooterTop>
        <FooterBottom>
          <span className="first-span">(주) sopshop</span>
          <span>서울시 중구 신당동 마린 빌딩 2층</span>
          <span>사업자번호 123-1234-5678 </span>
          <span>대표: 박효리</span>
        </FooterBottom>
      </FooterWrapper>
    </Footer>
  );
}
