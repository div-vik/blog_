import React, { useState } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import womanImg from "../../assets/woman.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import icon from "../../assets/icon.jpeg";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          {/* <img src={icon} alt="" /> */}
          <Link to="/">Blog_</Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Contacts</li>
          <li className={classes.listItem}>Categories</li>
        </ul>
        <div className={classes.right}>
          {/* <img
            onClick={() => setShowModal((prev) => !prev)}
            src={womanImg}
            alt=""
            className={classes.img}
          /> */}
          {user ? (
            <>
              <p
                className={classes.username}
                onClick={() => setShowModal((prev) => !prev)}
              >
                Welcome {user?.username}
              </p>
              {showModal && (
                <div className={classes.modal}>
                  <Link to="/create">Create</Link>
                  {user && <span onClick={handleLogout}>Logout</span>}
                </div>
              )}
            </>
          ) : (
            <Link className={classes.link} to="/register">
              Sign Up
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
