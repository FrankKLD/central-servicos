import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container } from "./styles";

const Component02: React.FC = () => {
  const navigate = useNavigate();
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const startFunc = async () => {
    await delay(2000);
    navigate("/");
  };

  return (
    <Container>
      <p>
        <Link to={"/"}>Home Page</Link>
      </p>
      <p>
        <Link to={"/c3"}>Componente 03</Link>
      </p>

      <p onClick={() => startFunc()}>Start</p>
    </Container>
  );
};

export default Component02;
