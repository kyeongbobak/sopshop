import { ButtonStyle } from "./ButtonStyle";

export default function Button({ type, ...props }) {
  return (
    <>
      <ButtonStyle type={type ? type : "button"} {...props}>
        {props.children}
      </ButtonStyle>
    </>
  );
}
