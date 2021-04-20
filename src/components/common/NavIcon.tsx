import AuthIcon from "components/svgs/AuthIcon";
import HomeIcon from "components/svgs/HomeIcon";
import iconTypes from "constants/iconTypes";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavIconContainer = styled(Link)`
  position: absolute;
  right: 0.8vw;
  top: 0.8vw;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

interface NavIconProps {
  iconType: string;
  to: string;
}

function NavIcon({ iconType, to }: NavIconProps) {
  const { HOME, AUTH } = iconTypes;

  const renderIcon = () => {
    switch (iconType) {
      case HOME:
        return <HomeIcon />;
      case AUTH:
        return <AuthIcon />;
      default:
        return <></>;
    }
  };

  return <NavIconContainer to={to}>{renderIcon()}</NavIconContainer>;
}

export default NavIcon;
