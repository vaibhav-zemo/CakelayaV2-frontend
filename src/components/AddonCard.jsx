import React, { useState } from "react";
import {
  Card,
  CardBody,
  Image,
  CardFooter,
  VStack,
  Text,
  HStack,
  Button,
  Input,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const AddonCard = ({ addon }) => {
  const [quantity, setQuantity] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  
  return (
    <Card mt={10}>
      <CardBody>
        <Image
          w="185px"
          h="185px"
          objectFit={"contain"}
          src={addon.img}
          borderRadius={"10px"}
        />
      </CardBody>
      <CardFooter>
        <VStack alignItems={"left"} w="full">
          <Text fontWeight={"500"}>{addon.title}</Text>
          <HStack justifyContent={"space-between"}>
            <Text fontWeight={"500"}>₹ {addon.price[0]}</Text>
            <Button
              display={isClicked ? "none" : "flex"}
              onClick={() => setIsClicked(true)}
              size={"sm"}
            >
              Add to Cart
            </Button>
            <HStack display={isClicked ? "flex" : "none"}>
              <Button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
                size={"xs"}
              >
                <MinusIcon />
              </Button>
              <Input
                size={"sm"}
                w={10}
                value={quantity}
                textAlign={"center"}
                readOnly
              />
              <Button
                onClick={() => setQuantity((prev) => prev + 1)}
                size={"xs"}
              >
                <AddIcon />
              </Button>
            </HStack>
          </HStack>
        </VStack>
      </CardFooter>
    </Card>
  );
};

export default AddonCard;
