import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SidebarBtn
} from "./SidebarElements";

import deleteToken from "../App/deleteToken";

const Sidebar = ({ isOpen, toggle }) => {

  function logout() {

    alert("You have logged out successfully.");
    deleteToken();

  }

  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>

        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>

        <SidebarMenu>

          <SidebarLink to="/Menu">Menu</SidebarLink>

          <SidebarLink to="/Cart">Cart</SidebarLink>

        <a  onClick={ logout } href="/Login">
            <SidebarBtn>Logout</SidebarBtn>
        </a>

        </SidebarMenu>

        <SideBtnWrap>

          <SidebarRoute to="/Checkout">Checkout</SidebarRoute>

        </SideBtnWrap>

      </SidebarContainer>
    </div>
  );

};
export default Sidebar;
