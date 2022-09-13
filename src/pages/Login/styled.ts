import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.container.maxWidth};
  max-height: 100vh;
  display: flex;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
`;
