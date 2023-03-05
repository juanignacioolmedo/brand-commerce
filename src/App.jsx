import React from "react";
import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/ItemListConteiner";
import {ChakraProvider} from '@chakra-ui/react'
const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListConteiner greeting = {"Bienvenidos a mi tienda online"} />
    </ChakraProvider>
  );
};

export default App;
