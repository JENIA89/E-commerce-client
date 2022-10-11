import styled from "styled-components";

export const Container = styled.div`
  max-width: ${({ theme }) => theme.sizes.container.maxWidth};
  width: 100%;
  background: url("assets/images/home-bg-max.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: url("assets/images/home-bg-min.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 800;
  font-size: 110px;
  text-align: center;
`;

export const Wrapper = styled.div`
  padding: 0 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  font-size: 30px;
  line-height: 24px;
`;
