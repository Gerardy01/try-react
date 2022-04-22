import "./header.css"
import NavItem from "./NavItem";
import { useState } from "react";



function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const change = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }

    return (
        <div className="header">
            <div className="header-content">
                <div className="ham-btn" onClick={change}></div>
                <div className="logo">
                    <h1>Test</h1>
                </div>
                <div className="fav-btn">  </div>
            </div>
            <ul className={ isOpen ? "nav-open" : "nav-closed" }>
                <NavItem title="Home" />
                <NavItem title="Contacts" />
                <NavItem title="Products" />
                <NavItem title="Live" />
                <NavItem title="About" />
            </ul>
        </div>
    )
}

export default Header;