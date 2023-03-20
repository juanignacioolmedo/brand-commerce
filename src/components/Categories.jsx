import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  ButtonGroup,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const listOfItems = [
    { id: 1, category: "Chicos" },
    { id: 2, category: "Recreacional" },
    { id: 3, category: "Profesionales" },
  ];
  return (
    <ButtonGroup className="categoryButtonGroup" gap="2">
      <Menu>
        <MenuButton>Categorias</MenuButton>
        <MenuList>
          {listOfItems.map((elem) => (
            <MenuItem key={elem.id}>
              <NavLink to={`/category/${elem.id}`}>{elem.category}</NavLink>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </ButtonGroup>
  );
};

export default Categories;
