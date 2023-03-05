import React from "react";
import Brand from "./Brand";
import Categories from "./Categories";
import CartWidget from "./CartWidget";
import {Spacer} from "@chakra-ui/react";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      
      <Categories />

      <Spacer />

      <Brand />

      <Spacer />

      <CartWidget />
    </div>
  );
};

export default NavBar;
