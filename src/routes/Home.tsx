import Gallery from "components/Gallery";
import UserIcon from "components/svgs/UserIcon";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SigninButton = styled(Link)`
  position: absolute;
  right: 0.8vw;
  top: 0.8vw;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0);
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <HomeContainer>
      <Gallery />
      <SigninButton to="/signin">
        <UserIcon />
      </SigninButton>
    </HomeContainer>
  );
}

export default Home;
