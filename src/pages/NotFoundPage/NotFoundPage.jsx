import Button from "../../components/Button/Button";

import NotFoundIcon from "../../assets/img/icon-404.png";
import { NotFoundPageInner, NotFoundPageWrapper, NotFoundPageGraphic, NotFoundPageContents, NotFoundPageMessage, NotFoundPageDescription, NotFoundPageButtonMenu } from "./NotFoundPageStyle";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <NotFoundPageWrapper>
        <NotFoundPageInner>
          <NotFoundPageGraphic>
            <img src={NotFoundIcon} alt="" />
          </NotFoundPageGraphic>
          <NotFoundPageContents>
            <NotFoundPageMessage>페이지를 찾을 수 없습니다.</NotFoundPageMessage>
            <NotFoundPageDescription>
              <p>페이지가 존재하지 않거나 사용할 수 없는 페이지 입니다.</p>
              <p>웹 주소가 올바른지 확인해주세요.</p>
            </NotFoundPageDescription>
            <NotFoundPageButtonMenu>
              <Button MButton onClick={() => navigate(`/mainPage`)}>
                메인으로
              </Button>
              <Button MButton White onClick={() => navigate(-1)}>
                이전 페이지
              </Button>
            </NotFoundPageButtonMenu>
          </NotFoundPageContents>
        </NotFoundPageInner>
      </NotFoundPageWrapper>
    </>
  );
}
