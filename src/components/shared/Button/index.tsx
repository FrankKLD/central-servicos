import React from "react";

import { Container } from "./styles";

export interface Props {
  title: string;
}

const Button: React.FC<Props> = ({ title }) => {
  return <Container>{title}</Container>;
};

export default Button;
