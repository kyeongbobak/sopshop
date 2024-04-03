import styled from "styled-components";

export const ProductInfoMenu = styled.ul`
  display: flex;
  width: 1280px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: var(--light-gray-color);
  gap: 40px;
  text-align: center;
  padding: 20px 0;
  font-size: var(--font-lg-size);
  justify-content: center;
  align-items: center;
`;

export const ProductInfoMenuItem = styled.li`
  width: ${({ width }) => width || "auto"};
`;

export const ProductInfoCheckbox = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 30px;
  border: 2px solid var(--main-color);
  border-radius: 50px;
`;
