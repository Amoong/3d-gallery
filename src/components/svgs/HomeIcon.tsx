import styled from "styled-components";

const StyledHomeIcon = styled.svg`
  width: 100%;
  height: 100%;
  fill: white;
`;

function HomeIcon() {
  return (
    <StyledHomeIcon
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
    </StyledHomeIcon>
  );
}

export default HomeIcon;
