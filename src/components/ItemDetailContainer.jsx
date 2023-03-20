import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "./CustomData.json";
const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const { id } = useParams();
  useEffect(() => {
    const getItem = async () => {
      const item = await fetchItem(id);
      setItem(item);
    };

    getItem();

    return () => {};
  }, [id]);

  async function fetchItem(id) {
    const delay = 2000;

    let proposed = undefined;
    if (id) {
      proposed = data.find((elem) => checkId(elem, id));
    }
    return new Promise(function (resolve) {
      setTimeout(resolve, delay, proposed);
    });
  }

  function checkId(elem, id) {
    return elem.id == id;
  }

  return item == undefined ? (
    <></>
  ) : (
    <ItemDetail key={item.id} item={item} centerElem={true} />
  );
};

export default ItemDetailContainer;
