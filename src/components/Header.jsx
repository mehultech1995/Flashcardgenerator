/*This file contains the Header of the project with AlmaBetter logo */
import React from "react";
import image from "../images & icons/Almalogo.png";

const Header = () => {
  return (
    <div className=" bg-white shadow-md shadow-gray-300">
      <img src={image} alt="logo" className=" w-36 ml-4 pb-2 pt-2" />
    </div>
  );
};

export default Header;
