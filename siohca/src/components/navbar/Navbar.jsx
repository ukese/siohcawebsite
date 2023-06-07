import React from "react";
import "./navbar.css";
import { VscMenu, VscClose } from "react-icons/vsc";
import { AiFillGithub } from "react-icons/ai";
import { ReactComponent as Logo } from "../../assets/svg/brand/logo-large.svg";
import { toggleMenu } from "./toggleMenu.js";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="siohca-navbar">
        <div className="siohca-navbar-links_logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="siohca-navbar-links_container">
          <p>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? "active-navbar-link" : undefined
              }
            >
              Team
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive ? "active-navbar-link" : undefined
              }
            >
              Posts
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/publications&press"
              className={({ isActive }) =>
                isActive ? "active-navbar-link" : undefined
              }
            >
              Publications & Press
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive ? "active-navbar-link" : undefined
              }
            >
              Contacts
            </NavLink>
          </p>
        </div>

        <div className="siohca-navbar-links_social">
          <a href="https://github.com/SterArcher/OHCA-registry-Slovenia">
            <AiFillGithub color="#000" size={25} />
          </a>
        </div>

        <div className="siohca-navbar-menu-icon" onClick={toggleMenu}>
          <div className="vscmenu">
            <VscMenu />
          </div>
          <div className="vscclose">
            <VscClose />
          </div>
        </div>
      </div>
      <div className="siohca-navbar-menu">
        <p>
          <Link to="/team">Team</Link>
        </p>
        <p>
          {" "}
          <Link to="/posts">Posts</Link>
        </p>
        <p>
          <Link to="/faq">FAQ</Link>
        </p>
        <p>
          <Link to="/publications&press">Publications & Press</Link>
        </p>
        <p>
          <Link to="/contacts">Contacts</Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
