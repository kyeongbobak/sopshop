import { ButtonStyle } from "./ButtonStyle";

export default function Button({ type, ...props }) {
  console.log(props);

  return (
    <>
      <ButtonStyle type={type ? type : "button"} {...props}>
        {props.children}
      </ButtonStyle>
    </>
  );
}
