import React from "react";

// import { Container } from './styles';

export interface Props {
  title: string;
  subTitle: string;
}

const Title: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
    </>
  );
};

export default Title;
