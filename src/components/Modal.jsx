import { ModalWrapper, ButtonWrapper, ModalBack } from "./ModalStyle";

export default function Modal(props) {
  return (
    <>
      <ModalBack>
        <ModalWrapper>
          {props.children}
          <ButtonWrapper>
            <button>{props.text}</button>
            <button>{props.submitText}</button>
          </ButtonWrapper>
        </ModalWrapper>
      </ModalBack>
    </>
  );
}
