import styled from "styled-components";

export const NotFoundPageWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const NotFoundPageInner = styled.div`
  display: flex;
  gap: 66px;
`;

export const NotFoundPageGraphic = styled.div``;

export const NotFoundPageContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 414px;
`;

export const NotFoundPageMessage = styled.p`
  font-size: var(--font-extra-size);
  font-weight: var(--font-bold);
`;

export const NotFoundPageDescription = styled.div`
  font-size: var(--font-md-size);
  margin: 20px 0px 40px;
  p {
    line-height: 20px;
  }
`;

export const NotFoundPageButtonMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;
