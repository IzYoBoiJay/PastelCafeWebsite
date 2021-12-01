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

  return (
    <div>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>

        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>

        <SidebarMenu>

          <SidebarLink to="/Menu">Menu</SidebarLink>

          <SidebarLink to="/Cart">Cart</SidebarLink>

        <a href="/Login">
            <SidebarBtn onClick={ deleteToken }>Logout</SidebarBtn>
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
