import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";
import { ImAidKit } from 'react-icons/im';
import { IconContext } from "react-icons/lib";

function Navbar() {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};

	const extendElement = () => {
		dropdown ? setDropdown(false) : setDropdown(true);
	};

	return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
			<nav className="navbar">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						CoronaAid
					<ImAidKit className="icon"/>
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"} />
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
							About Us
						</Link>
                        </li>
                    <li
						className="nav-item"
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
						onClick={extendElement}
					>
						<Link to="/fundraiser" className="nav-links" onClick={extendElement}>
							Support
							<i className="fas fa-caret-down" />
						</Link>
							{/* {dropdown && <Dropdown />} */}
							{dropdown && <Dropdown onCloseMobileMenu={closeMobileMenu}/>}
					</li>    
                    <li className="nav-item">
						<Link to="/child-care" className="nav-links" onClick={closeMobileMenu}>
							Child Care
						</Link>
                    </li>
                    <li className="nav-item">
						<Link to="/pet-care" className="nav-links" onClick={closeMobileMenu}>
							Pet Care
						</Link>
					</li>    
					<li className="nav-item">
						<Link to="/sign-up" className="nav-links" onClick={closeMobileMenu}>
							Become a Volunteer
						</Link>
					</li>
					
					<li>
						<Link
							to="/login"
							className="nav-links-mobile"
							onClick={closeMobileMenu}
						>
							Login
						</Link>
					</li>
				</ul>
				<Button />
                </nav>
                </IconContext.Provider>
		</>
	);
}

export default Navbar;
