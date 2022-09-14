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

export const ImageArrow = styled.img``;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormTitle = styled.h1`
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;
`;

export const LinkToShop = styled.div`
  padding: 60px 0 0 80px;
  a {
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
  }
  a:before {
    content: url("assets/icons/left-arrow.svg");
    position: absolute;
    left: -27px;
    top: -4px;
  }
`;

export const LinkToSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkToSignUpTitle = styled.p``;

export const LinkToSignUp = styled.div`
  a {
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
    color: inherit;
    font-weight: 700;
    position: relative;
  }
  a:first-letter {
    text-transform: uppercase;
  }
`;
