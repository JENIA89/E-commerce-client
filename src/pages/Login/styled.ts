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
  width: 100%;
  display: flex;
`;

export const FormWrapper = styled.div`
  display: block;
`;

export const FormTitle = styled.h1`
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;
`;

export const LinkToShop = styled.div`
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    text-transform: uppercase;
  }
  a:before {
    content: url("assets/icons/left-arrow.svg");
  }
`;
