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

                    <SidebarLink to="/Login">
                        Login
                    </SidebarLink>

                    <SidebarLink to="/Register">
                        Register
                    </SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>

                    <SidebarRoute to="/Menu">
                        Order Now!
                    </SidebarRoute>

                </SideBtnWrap>


            </SidebarContainer>
        </div>
    )
}
export default Sidebar
