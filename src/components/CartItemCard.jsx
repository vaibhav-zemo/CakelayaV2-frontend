import React, { useState } from "react";
import {
  Card,
  CardBody,
  Stack,
  Image,
  VStack,
  HStack,
  Input,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import ConfirmRemoveModal from "./ConfirmRemoveModal";

const CartItemCard = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Card direction={"row"} px={4} py={2} w="full">
      <Image w="150px" h="150px" objectFit={"contain"} src={item.img} />
      <Stack>
        <CardBody>
          <VStack alignItems={"left"}>
            <Text> {item.title} </Text>
            <Text fontWeight={"500"}>₹ {item.price} </Text>
            <Text> Weight: {item.weight} </Text>
            <HStack>
              <Text mr={2}>Qty:</Text>
              <HStack>
                <Button
                  onClick={() => {
                    if (quantity === 1) onOpen();
                    else setQuantity((prev) => prev - 1);
                  }}
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
        </CardBody>
      </Stack>
      <ConfirmRemoveModal isOpen={isOpen} onClose={onClose} />
    </Card>
  );
};

export default CartItemCard;
