import React from "react"
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from "./SidebarElements"


const Sidebar = ({isOpen, toggle}) => {
    return (
        <div>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>

                <Icon onClick={toggle}>

                    <CloseIcon/>

                </Icon>

                <SidebarMenu>

                    <SidebarLink to="/Menu">
                        Menu
                    </SidebarLink>

                    <SidebarLink to="/Cart">
                        Cart
                    </SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>

                    <SidebarRoute to="/Menu">
                        Order Now!
                    </SidebarRoute>

                </SideBtnWrap>

                    <SidebarLink to="/Checkout">
                        Checkout
                    </SidebarLink>
                    
            </SidebarContainer>
        </div>
    )
}
export default Sidebar;
