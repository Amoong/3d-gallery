import NavIcon from "components/common/NavIcon";
import { authService } from "fbase";
import styled from "styled-components";

import iconTypes from "constants/iconTypes";

const AuthContainer = styled.div``;

function Auth() {
  return (
    <AuthContainer>
      <NavIcon iconType={iconTypes.HOME} to="/" />
    </AuthContainer>
  );
}

export default Auth;
