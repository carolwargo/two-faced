import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function ServiceLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "orange"
      }

    return (
        <>
            <nav className="service-nav">

                {/*inline styling and "end" prop to show IsActive route*/} 
                <NavLink 
                    to="/service/web-design "
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                        Dynamic Web Design
                    </NavLink>
                <NavLink 
                    to="/service/software-development"
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                        Software Development
                    </NavLink>
                <NavLink 
                    to="/service/graphic-design"
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                        Graphic Design
                    </NavLink>
                <NavLink 
                    to="/service/digital-marketing"
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                       Digital Marketing
                    </NavLink>

                    <NavLink 
                    to="/service/e-commerce "
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                        E-Commerce Solutions
                    </NavLink>

                    <NavLink 
                    to="/service/mobile-apps "
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                      Custom Mobile Applications
                    </NavLink>

                {/*<NavLink 
                    to="/service/digital-marketing/:id"
                    style={({isActive}) => isActive ? activeStyle : null }>serviceVanDetail</NavLink>*/}
            </nav>
            <Outlet />
        </>
    )
}