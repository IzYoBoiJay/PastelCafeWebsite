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

                    <SidebarLink to="/">
                        Menu
                    </SidebarLink>

                    <SidebarLink to="/">
                        Cart
                    </SidebarLink>

                    <SidebarLink to="/">
                        Login
                    </SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>

                    <SidebarRoute to="/">
                        Order Now!
                    </SidebarRoute>

                </SideBtnWrap>

            </SidebarContainer>
        </div>
    )
}

export default Sidebar
