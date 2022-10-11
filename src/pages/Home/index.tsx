import React, { FC } from "react";
import Header from "components/Header";
import * as S from "./styled";

const Home: FC = () => (
  <S.Container>
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
  </S.Container>
);

export default Home;
