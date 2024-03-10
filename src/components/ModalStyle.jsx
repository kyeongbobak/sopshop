import styled from "styled-components";

export const ModalBack = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalWrapper = styled.div`
  width: 360px;
  padding: 50px 70px 40px;
  border: 1px solid var(--gray-color);
  font-size: var(--font-md-size);
  text-align: center;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  button {
    color: var(--line-black-color);
    font-size: var(--font-md-size);
    background-color: var(--white-color);
    border: 1px solid var(--gray-color);
    border-radius: 5px;
    padding: 10px 28px;
  }

  button:nth-child(2) {
    margin-left: 10px;
    background-color: var(--box-black-color);
    color: var(--white-color);
  }
`;
