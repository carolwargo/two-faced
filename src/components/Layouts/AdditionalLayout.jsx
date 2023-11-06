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
            <nav className="additional-services-nav">

                {/*inline styling and "end" prop to show IsActive route*/} 
                <NavLink 
                    to="/additional-services/consulting"
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                        Consulting
                    </NavLink>
                <NavLink 
                   to="/additional-services/support"
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                        Support
                    </NavLink>
                <NavLink 
                    to="/additional-services/training"
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                        Training
                    </NavLink>
                <NavLink 
                    to="/additional-services/programs"
                    style={({isActive}) => isActive ? activeStyle : null }
                    >
                      Programs & Partnerships
                    </NavLink>
                    </nav>
            <Outlet />
        </>
    )
}