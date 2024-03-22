import styled, { css } from "styled-components";

export const ButtonStyle = styled.button`
  border: ${(props) => props.border || "none"};
  text-align: ${(props) => props.textAlign || "center"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  cursor: pointer;

  ${(props) =>
    props.LButton &&
    css`
      padding: 19px 88px;
      background-color: var(--main-color);
      color: var(--white-color);
      font-size: var(--font-max-size);
      font-weight: var(--font-bold);
      ${(props) =>
        props.disabled &&
        css`
          background-color: var(--gray-color);
        `}
    `}

  ${(props) =>
    props.MButton &&
    css`
      padding: 19px 223px;
      background-color: var(--main-color);
      font-size: var(--font-lg-size);
      color: var(--white-color);
      ${(props) =>
        props.disabled &&
        css`
          background-color: var(--gray-color);
        `}

      ${(props) =>
        props.Dark &&
        css`
          background-color: var(--box-black-color);
        `}

        ${(props) =>
        props.White &&
        css`
          background-color: var(--white-color);
          color: var(--box-black-color);
        `}
    `}

    ${(props) =>
    props.MsButton &&
    css`
      width: 166px;
      height: 54px;
      background-color: var(--box-black-color);
      color: var(--white-color);
      font-size: var(--font-md-size);

      ${(props) =>
        props.White &&
        css`
          background-color: var(--white-color);
          color: var(--box-black-color);
          border: 1px solid var(--gray-color);
          font-weight: var(--font-bold);

          ${(props) =>
            props.Abled &&
            css`
              border: 1px solid var(--box-black-color);
            `}
        `}
    `}

    ${(props) =>
    props.SButton &&
    css`
      padding: 10px 25px;
      background-color: var(--box-black-color);
      color: var(--white-color);
      font-size: var(--font-md-size);

      ${(props) =>
        props.White &&
        css`
          background-color: var(--white-color);
          color: var(--box-black-color);
          border: 1px solid var(--gray-color);
          font-weight: var(--font-bold);

          ${(props) =>
            props.Abled &&
            css`
              border: 1px solid var(--box-black-color);
            `}
        `}
    `}
`;

export default ButtonStyle;
