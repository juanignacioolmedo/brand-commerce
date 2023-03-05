import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    ButtonGroup
  } from "@chakra-ui/react";

const Categories = () => {
  return (
    <ButtonGroup className="categoryButtonGroup" gap="2">
        <Menu>
          <MenuButton>Categorias</MenuButton>
          <MenuList>
            <MenuItem>Categoria A</MenuItem>
            <MenuItem>Categoria B</MenuItem>
            <MenuItem>Categoria C</MenuItem>
            <MenuItem>Categoria D</MenuItem>
            <MenuItem>Categoria E</MenuItem>
          </MenuList>
        </Menu>
      </ButtonGroup>
  )
}

export default Categories