import React, { FC, useState } from "react";
import { useAppDispatch } from "hooks/redux";
import { useNavigate } from "react-router-dom";
import { login } from "redux/slices/auth/actionCreators";
import * as S from "./styled";

const Login: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
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
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
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
      </S.FormContainer>
    </S.Container>
  );
};

export default Login;
