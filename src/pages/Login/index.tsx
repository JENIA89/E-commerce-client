import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "hooks/redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "redux/slices/auth/actionCreators";
import * as S from "./styled";

const Login: FC = () => {
  const { handleSubmit } = useForm();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (!username || !password) return;
    const data = { username, password };
    dispatch(login(data));
    navigate("/");
  };

  return (
    <S.Container>
      <S.ImageContainer>
        <img src="assets/images/login-img.svg" alt="loginImg" />
      </S.ImageContainer>
      <S.FormContainer>
        <S.LinkToShop>
          <Link to="/products">back to shopping</Link>
        </S.LinkToShop>
        <S.FormWrapper>
          <S.FormTitle>Login</S.FormTitle>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
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
        </S.FormWrapper>
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
