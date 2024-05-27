import styled from "styled-components";

export const ProductInfoMenu = styled.ul`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  border-top: 1px solid var(--black-color);
  border-bottom: 1px solid var(--black-color);
  text-align: center;
  padding: 20px 0;
  font-family: "Pretendard";
  font-size: var(--font-sm-size);
  justify-content: center;
  align-items: center;
`;

export const ProductInfoMenuItem = styled.li`
  width: ${({ width }) => width || "auto"};
`;

export const ProductInfoCheckbox = styled.div`
  width: 9px;
  height: 9px;
  margin: 0 30px;
  border: 1px solid var(--black-color);
  border-radius: 50px;
`;
