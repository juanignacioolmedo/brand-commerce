import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Brand = () => {
  return (
    <Box p="2">
      <Heading size="md">
        <NavLink to={'/'}>Tienda de padel</NavLink>
      </Heading>
    </Box>
  );
};

export default Brand;
