import styled from "styled-components";

import iconTypes from "constants/iconTypes";

import NavIcon from "components/common/NavIcon";

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <HomeContainer>
      <NavIcon iconType={iconTypes.AUTH} to="/signin" />
    </HomeContainer>
  );
}

export default Home;
