import React from "react";
import {
  Text,
  HStack,
  VStack,
  Button,
  Heading,
  Card,
  CardBody,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import CartItemCard from "../components/CartItemCard";
import { cartItems } from "../data";
import { Link } from "react-router-dom";

const Cart = () => {

  return (
    <VStack px={{ base: 4, tablet: 32 }} mb={10} mt={8}>
      <Heading fontSize={"lg"} textAlign={"left"} w="full">
        My Cart({cartItems.length} items)
      </Heading>
      <Grid
        mt={2}
        w="full"
        gap={10}
        templateColumns={{ base: "repeat(1, 1fr)", md: "2fr 1fr" }}
      >
        <GridItem>
          <VStack w="auto">
            {cartItems.map((item) => (
              <CartItemCard item={item} />
            ))}
          </VStack>
        </GridItem>
        <GridItem>
          <Card variant={"outline"}>
            <CardBody>
              <VStack alignItems={"left"}>
                <Heading>Order Summary</Heading>
                <VStack alignItems={"left"} gap={2} my={4}>
                  <HStack justifyContent={"space-between"}>
                    <Text>Subtotal</Text>
                    <Text>₹ 500</Text>
                  </HStack>
                  <HStack justifyContent={"space-between"}>
                    <Text>Delivery Charges</Text>
                    <Text>₹ 50</Text>
                  </HStack>
                  <HStack justifyContent={"space-between"}>
                    <Text>Total</Text>
                    <Text>₹ 550</Text>
                  </HStack>
                </VStack>
                <Button>Checkout</Button>
                <Link to="/">
                  <Text
                    textAlign={"center"}
                    mt={2}
                    textDecor={"underline"}
                    color={"blue"}
                  >
                    Continue Shopping
                  </Text>
                </Link>
              </VStack>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default Cart;
