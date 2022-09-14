import React, { FC, useState } from "react";
import { Input } from "antd";
import { useAppDispatch } from "hooks/redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "redux/slices/auth/actionCreators";
import * as S from "./styled";

const Login: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!username || !password) return;
    const data = { username, password };
    dispatch(login(data));
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <S.ImageArrow src="assets/images/login-img.svg" alt="loginImg" />
      </S.ImageContainer>
      <S.FormContainer>
        <S.LinkToShop>
          <Link to="/products">back to shopping</Link>
        </S.LinkToShop>
        <S.FormWrapper>
          <S.FormTitle>Login</S.FormTitle>
          <form onSubmit={onSubmit} autoComplete="off">
            <input
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              value={username}
              type="text"
              placeholder="username"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
              type="password"
              placeholder="password"
            />
            <button type="submit">Login</button>
          </form>
          <S.LinkToSignUpContainer>
            <S.LinkToSignUpTitle>Don’t have an account?</S.LinkToSignUpTitle>
            <S.LinkToSignUp>
              <Link to="/register">Signup</Link>
            </S.LinkToSignUp>
          </S.LinkToSignUpContainer>
        </S.FormWrapper>
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
