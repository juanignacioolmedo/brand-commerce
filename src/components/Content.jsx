import React from "react";
import { Card, CardBody, Text } from "@chakra-ui/react";
import "./content.css";
const Content = ({ greeting }) => {
  return (
    <div className="Content">
      <Card>
        <CardBody>
          <Text fontSize="3xl"> {greeting} </Text>
        </CardBody>
      </Card>
    </div>
  );
};

export default Content;
