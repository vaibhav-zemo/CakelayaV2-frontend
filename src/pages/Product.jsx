import React, { useEffect, useState } from "react";
import {
  Image,
  Flex,
  Heading,
  Text,
  VStack,
  Button,
  Select,
  HStack,
  Box,
  Grid,
  GridItem,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import AddonDrawer from "../components/AddonDrawer";

const Product = () => {
  const location = useLocation();
  const id = location?.pathname?.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const getProduct = async () => {
      try {
        await publicRequest
          .get(`/products/find/${id}`)
          .then((res) => {
            setProduct(res.data);
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", tablet: "repeat(2, 1fr)" }}
      w="full"
      px={4}
      gap={10}
      pt={16}
      pb={20}
    >
      <GridItem
        h={{ base: "330px", tablet: "480px" }}
        justifyContent={"center"}
        display={"flex"}
      >
        <Image src={product?.img} alt={product?.title} />
      </GridItem>
      <GridItem>
        <VStack alignItems={"start"} gap={8}>
          <Heading>{product?.title}</Heading>
          <Text>{product?.desc}</Text>
          <Text fontWeight={"700"} fontSize={"3xl"}>
            ₹ {product.price ? product?.price[0] : ""}
          </Text>
          <Flex
            gap={{ base: 4, md: 8 }}
            flexDir={{ base: "column", mob: "row" }}
          >
            <Flex alignItems={"center"}>
              <Text fontWeight={"500"}>Flavour</Text>
              <Box ml={4}>
                <Select>
                  {product?.color?.map((flavour) => (
                    <option value={flavour} key={flavour}>
                      {flavour}
                    </option>
                  ))}
                </Select>
              </Box>
            </Flex>
            <Flex alignItems={"center"}>
              <Text fontWeight={"500"} width={{ base: "53px", mob: "auto" }}>
                Weight
              </Text>
              <Box ml={4}>
                <Select>
                  {product?.size?.map((size) => (
                    <option value={size} key={size}>
                      {size}
                    </option>
                  ))}
                </Select>
              </Box>
            </Flex>
          </Flex>
          <Flex
            flexDir={{ base: "column", mob: "row" }}
            gap={{ base: 4, md: 2 }}
          >
            <HStack>
              <Button
                onClick={() => {
                  if (quantity === 1) {
                    return;
                  }
                  setQuantity((prev) => prev - 1);
                }}
                size={"sm"}
              >
                <MinusIcon />
              </Button>
              <Input
                w={16}
                textAlign={"center"}
                type="number"
                value={quantity}
                readOnly={true}
              />
              <Button
                onClick={() => setQuantity((prev) => prev + 1)}
                size={"sm"}
              >
                <AddIcon />
              </Button>
            </HStack>
            <HStack ml={{ base: 0, md: 8 }}>
              <Button>Add to Cart</Button>
              <Button onClick={onOpen}>Buy Now</Button>
            </HStack>
          </Flex>
        </VStack>
      </GridItem>
      <AddonDrawer isOpen={isOpen} onClose={onClose} />
    </Grid>
  );
};

export default Product;
