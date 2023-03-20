import React from "react";
import { useState, useEffect } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import "./ItemListContainer.css";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import data from './CustomData.json';

const ItemListContainer = () => {
  const [listOfItems, setListOfItems] = useState([]);
  const {id} = useParams()
  useEffect(() => {
    const getItems = async () => {    
      const items = await fetchItems(id);
      setListOfItems(items);
    };
    /* se hace un request http que al resolverse, (await se resuelve) setea una propiedad listOfItems en el estado
    */

    getItems(); // llamo a la funcion async que cree arriba

    return () => {
      // this now gets called when the component unmounts, para evitar problemas de renderizado
    };
  }, [id]);

  async function fetchItems() {
    const delay = 2000
    let filtered = data
    if (id) {
      filtered = filtered.filter( (elem) => checkCategory(elem, id))
    }
    return new Promise(function (resolve) {
      setTimeout(resolve, delay, filtered);
    });
  }

  function checkCategory(elem, category) {
    return elem.category == category;
  }

  return (
    <div className="ItemListContainer">
      <SimpleGrid columns={3} spacing={10}>
        {listOfItems.map((elem) => (
          <ItemDetail key={elem.id} centerElem={false} item={elem}/>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default ItemListContainer;
