import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineUser } from "react-icons/hi2";

import ButtonIcon from "./ButtonIcon";
import Logout from "../features/authentication/Logout";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.6rem;
`;

const StyledListItem = styled.li`
  list-style: none;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <StyledListItem>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </StyledListItem>

      <StyledListItem>
        <DarkModeToggle />
      </StyledListItem>

      <StyledListItem>
        <Logout />
      </StyledListItem>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
