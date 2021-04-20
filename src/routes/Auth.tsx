import NavIcon from "components/common/NavIcon";
import { authService } from "fbase";
import styled from "styled-components";

import iconTypes from "constants/iconTypes";
import React, { useState } from "react";

const AuthContainer = styled.div``;

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.target as HTMLInputElement;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
  };

  return (
    <AuthContainer>
      <NavIcon iconType={iconTypes.HOME} to="/" />
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={onChange}
        />
      </form>
    </AuthContainer>
  );
}

export default Auth;
