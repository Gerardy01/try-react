import "./header.css"
import NavItem from "./NavItem";
import { useState } from "react";



function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const [lastItem, setLastItem] = useState(0);

    const change = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
            setLastItem(0);
        }
    }

    const handle = (lastItemNum) => {
        setLastItem(lastItemNum);
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
                <NavItem title="Home" handle={handle} id={1} theLastItem={lastItem}>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                </NavItem>
                <NavItem title="Contacts" handle={handle} id={2} theLastItem={lastItem}>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                </NavItem>
                <NavItem title="Products" handle={handle} id={3} theLastItem={lastItem}>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                </NavItem>
                <NavItem title="Live" handle={handle} id={4} theLastItem={lastItem}>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                </NavItem>
                <NavItem title="About" handle={handle} id={5} theLastItem={lastItem}>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                    <li>test1</li>
                </NavItem>
            </ul>
        </div>
    )
}

export default Header;