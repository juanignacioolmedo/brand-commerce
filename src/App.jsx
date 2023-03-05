import React from "react";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import {ChakraProvider} from '@chakra-ui/react'
const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <Content greeting = {"Bienvenidos a mi tienda online"} />
    </ChakraProvider>
  );
};

export default App;
