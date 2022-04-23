import { useState, useEffect } from "react"


function NavItem(props) {

    const [navItemOpen, setNavItemOpen] = useState(false);

    const navItemSet = () => {
        if (!navItemOpen && props.children) {
            setNavItemOpen(true);
            props.handle(props.id);
        } else {
            setNavItemOpen(false);
        }
    }

    useEffect(() => {
        if (props.id != props.theLastItem) {
            setNavItemOpen(false);
        }
    }, [props.theLastItem]);

    return(
        <li className="nav-item">

            <div className="nav-item-header" onClick={navItemSet}>
                <span> {props.title} </span>
            </div>

            <ul className={navItemOpen ? "nav-item-item-holder-open" : "nav-item-item-holder-closed"}>
                {props.children}
            </ul>
        </li>
    )
}

export default NavItem