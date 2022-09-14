import React, { FC } from "react";
import { Input, InputProps } from "antd";
import * as S from "./styled";

interface Props extends InputProps {
  label?: string;
  type?: string;
}

const FormInput: FC<Props> = ({ type }) => {
  return <S.InputContainer>Input</S.InputContainer>;
};

export default FormInput;
