import React from "react";
import {
  Card,
  CardBody,
  Text,
  CardHeader,
  Flex,
  Box,
  Image,
  Heading,
  CardFooter,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ item, centerElem }) => {
  const applyClass = centerElem ? "ItemDetail" : "";
  return (
    <div className={applyClass}>
      <Card maxW="md">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Box>
                <Heading size="sm">{item.title}</Heading>
                <Text>{item.price}</Text>
              </Box>
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>{item.description}</Text>
        </CardBody>
        <Image objectFit="cover" src={item.pictureUrl} alt="Foto paleta" />

        {centerElem ? <></> : <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <NavLink to={`/item/${item.id}`}>Ver detalle</NavLink>
        </CardFooter>}
      </Card>
    </div>
  );
};

export default ItemDetail;
