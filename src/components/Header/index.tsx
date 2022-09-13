import React, { FC } from "react";
import { Link } from "react-router-dom";
import * as S from "./styled";

const Header: FC = () => (
  <S.Container>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
    <Link to="/products">Products</Link>
  </S.Container>
);

export default Header;
