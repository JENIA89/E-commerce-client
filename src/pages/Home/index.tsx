import React, { FC } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import * as S from "./styled";

const Home: FC = () => (
  <S.Container>
    <S.WrapperContent>
      <Header />
      <S.ImageContainer>
        <S.Wrapper>
          <S.ButtonWrapper>
            <S.Button>Explore Сollections</S.Button>
            <S.Button>Shop now</S.Button>
          </S.ButtonWrapper>
          <S.Title>Simple. Timeless.</S.Title>
        </S.Wrapper>
      </S.ImageContainer>
    </S.WrapperContent>
    <Footer />
  </S.Container>
);

export default Home;
