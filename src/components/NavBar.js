import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import logo from "../assets/logo.png"
import styles from "../styles/NavBar.module.css";
import Avatar from "./Avatar";

import { NavLink } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../contexts/CurrentUserContext";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();


  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  
  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const addPostIcon = (
    <NavLink
      className={styles.NavLink}
      activeClassName={styles.Active}
      aria-label="AddPost"
      rel="noreferrer"
      to="/posts/create">
      <i  alt="add-post-icon" className="fas fa-plus-square"></i>Add post
    </NavLink>
  );

  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        aria-label="Feed"
        rel="noreferrer"
        to="/feed">
        <i  alt="feed-icon" className="fas fa-stream"></i>Feed
      </NavLink>
      <NavLink
        className={`${styles.NavLink}`}
        activeClassName={styles.Active}
        aria-label="Bookmarks"
        rel="noreferrer"
        to="/bookmarks">
        <i  alt="bookmark-icon" className="fa-solid fa-bookmark mr-2"></i>Bookmarks
      </NavLink>
      <NavLink 
        className={styles.NavLink} 
        aria-label="SignOut"
        rel="noreferrer"
        to="/" 
        onClick={handleSignOut}>
        <i  alt="signout-icon" className="fas fa-sign-out-alt"></i>Sign out
      </NavLink>
      <NavLink
        className={styles.NavLink}
        aria-label="Profile"
        rel="noreferrer"
        to={`/profiles/${currentUser?.profile_id}`}>
        <Avatar src={currentUser?.profile_image} text="Profile" height={40} /> 
      </NavLink>
    </>
  );
  
  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        aria-label="Sign In"
        rel="noreferrer"
        to="/signin">
        <i  alt="signin-icon" className="fas fa-sign-in-alt"></i>Sign in
      </NavLink>
      <NavLink
        className={styles.NavLink}
        activeClassName={styles.Active}
        aria-label="Sign Up"
        to="/signup">
        <i  alt="signup-icon" className="fas fa-user-plus"></i>Sign up
      </NavLink>
    </>
  );
  
  return (
    <Navbar 
      expanded={expanded}
      className={styles.NavBar} 
      variant="dark"  
      expand="md" 
      fixed="top">
      <Container>
        <NavLink  to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="55" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
          <Navbar.Toggle
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink 
              exact
              className={styles.NavLink}
              activeClassName={styles.Active} 
              aria-label="Home page"
              rel="noreferrer"
              to="/">
              <i  alt="home-icon" className="fas fa-home"></i>Home
            </NavLink>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
