import styled, { css } from "styled-components";

export const ButtonStyle = styled.button`
  border: ${(props) => props.border || "none"};
  text-align: ${(props) => props.textAlign || "center"};
  border-radius: ${(props) => props.borderRadius || "none"};
  cursor: pointer;

  ${(props) =>
    props.LButton &&
    css`
      padding: 15px 88px;
      background-color: var(--black-color);
      color: var(--white-color);
      font-size: var(--font-lg-size);
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
      width: 200px;
      padding: 19px 0;
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
          background-color: var(--black-color);
        `}

        ${(props) =>
        props.White &&
        css`
          border: 1px solid var(--main-color);
          background-color: var(--white-color);
          color: var(--black-color);
        `}
    `}

    ${(props) =>
    props.MsButton &&
    css`
      width: 166px;
      height: 54px;
      background-color: var(--black-color);
      color: var(--white-color);
      font-size: var(--font-md-size);

      ${(props) =>
        props.White &&
        css`
          background-color: var(--white-color);
          color: var(--black-color);
          border: 1px solid var(--gray-color);
          font-weight: var(--font-bold);

          ${(props) =>
            props.Abled &&
            css`
              border: 1px solid var(--black-color);
            `}
        `}
    `}

    ${(props) =>
    props.SButton &&
    css`
      width: 60px;
      padding: 10px 20px;
      background-color: var(--black-color);
      color: var(--white-color);
      font-size: var(--font-md-size);

      ${(props) =>
        props.White &&
        css`
          background-color: var(--white-color);
          color: var(--black-color);
          border: 1px solid var(--gray-color);
          font-weight: var(--font-bold);
          margin-right: 10px;

          ${(props) =>
            props.Abled &&
            css`
              border: 1px solid var(--black-color);
            `}
        `}
    `}
`;

export default ButtonStyle;
