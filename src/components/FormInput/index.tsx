import React, { FC } from "react";
import { InputProps } from "antd";
import * as S from "./styled";

interface Props extends InputProps {
  label?: string;
  type?: string;
}

const FormInput: FC<Props> = () => {
  return <S.FormInputContainer>input</S.FormInputContainer>;
};

export default FormInput;
