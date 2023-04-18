/* in this file we are creating the navbar of our website whics contains the routes to  create new  page to create flashcard
and the route to myFlashcard page which will display all the flashcard  */
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    
    <div className="w-full">
      <h1 className="text-3xl font-medium mb-6">
        Create Flashcard
      </h1>
      <div className="flex items-center space-x-10 mb-3">
        <button className="text-1xl font-medium">
          <NavLink
            to={"/"} 
            /*if the link is actve it will give bottom background to creat new of red color */
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid red" : undefined,
              borderRadius: "2px",
              paddingBottom: "12px",
            })}
          >
            Create New
          </NavLink>
        </button>
        <button className="text-1xl font-medium">
          <NavLink
            to={"/myflashcard"}
            /*if the link is actve it will give bottom background to my Flashcard of red color */
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid red" : undefined,
              borderRadius: "2px",
              paddingBottom: "12px",
            })}
          >
            My Flashcard
          </NavLink>
        </button>
      </div>
      <hr className="border bg-black-700 border-gray-300 mb-8" />
    </div>
  );
};

export default Navbar;
