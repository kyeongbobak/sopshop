import GlobalStyle from "./style/GlobalStyle";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <GlobalStyle />
      <Modal text="아니오" submitText="예">
        이미 장바구니에 있는 상품입니다 장바구니로 이동하겠습니까?
      </Modal>
    </>
  );
}
export default App;
