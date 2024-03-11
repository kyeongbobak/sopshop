import GlobalStyle from "./style/GlobalStyle";
import Modal from "./components/Modal";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const Contents = styled.p`
    font-size: 100px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    color: red;
  `;

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        모달 열기
      </button>
      <Contents>내용</Contents>
      {modalOpen && (
        <Modal text="시작" submitText="취소">
          로그인이 필요한 서비스입니다. 로그인 하시겠습니까?
        </Modal>
      )}
    </>
  );
}
export default App;
