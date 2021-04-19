import Gallery from "components/Gallery";
import styled from "styled-components";

const SigninButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url("https://avatars.githubusercontent.com/u/33210021?v=4");
  background-repeat: no-repeat;
  background-size: contain;
`;

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  ${SigninButton} {
    position: absolute;
    left: 0;
    top: 0;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <Gallery />
      <SigninButton />
    </HomeContainer>
  );
}

export default Home;
