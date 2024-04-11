import { ModalWrapper, ModalContents, ButtonWrapper, ModalBack } from "./ModalStyle";
import Button from "../Button/Button";

export default function Modal(props) {
  return (
    <>
      <ModalBack>
        <ModalWrapper>
          <ModalContents {...props}> {props.children}</ModalContents>
          <ButtonWrapper>
            <Button SButton White onClick={() => props.onCancel()}>
              {props.text}
            </Button>
            <Button SButton onClick={() => props.onSubmit()}>
              {props.submitText}
            </Button>
          </ButtonWrapper>
        </ModalWrapper>
      </ModalBack>
    </>
  );
}
