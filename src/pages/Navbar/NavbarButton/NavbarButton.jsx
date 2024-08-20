import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setShowMenu } from "../../../utils/authSlice";
import "./NavbarButton.css";
function NavbarButton() {
  const showMenu = useSelector((state) => state.auth.showMenu);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    dispatch(setShowMenu(!showMenu));
  };

  return (
    <button onClick={toggleMenu} className="nav-toggle">
      {showMenu ? <FaTimes /> : <FaBars />}
    </button>
  );
}

export default NavbarButton;
