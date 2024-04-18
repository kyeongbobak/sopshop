import styled from "styled-components";

export const AlertModalBack = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;

export const AlertModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
  width: 360px;
  padding: 50px 70px 40px;
  border: 1px solid var(--gray-color);
  font-size: var(--font-md-size);
  line-height: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

export const AlertModalContents = styled.div`
  width: ${(props) => props.width || "150px"};
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  width: 220px;
  margin-top: 30px;
  z-index: 101;
`;
