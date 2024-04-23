import { AlertModalBack, AlertModalWrapper, AlertModalContents, ButtonWrapper } from "./AlertModalStyle";
import Button from "../../Button/Button";

export default function AlertModal(props) {
  return (
    <>
      <AlertModalBack>
        <AlertModalWrapper>
          <AlertModalContents {...props}> {props.children}</AlertModalContents>
          <ButtonWrapper>
            <Button SButton White onClick={() => props.onCancel()}>
              {props.text}
            </Button>
            <Button SButton onClick={() => props.onSubmit()}>
              {props.submitText}
            </Button>
          </ButtonWrapper>
        </AlertModalWrapper>
      </AlertModalBack>
    </>
  );
}
