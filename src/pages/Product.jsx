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
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Product = () => {
  const location = useLocation();
  const id = location?.pathname?.split("/")[2];
  const [product, setProduct] = useState({});

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
    <Grid templateColumns={{base: "repeat(1, 1fr)" , tablet: "repeat(2, 1fr)"}} w="full" px={4} gap={10} pt={16} pb={20}>
      <GridItem h={{base: "330px",tablet: "480px"}} justifyContent={"center"} display={"flex"}>
        <Image src={product?.img} alt={product?.title} />
      </GridItem>
      <GridItem>
        <VStack alignItems={"start"} gap={8}>
          <Heading>{product?.title}</Heading>
          <Text>{product?.desc}</Text>
          <Text fontWeight={"700"} fontSize={"3xl"}>
            ₹ {product.price ? product?.price[0] : ""}
          </Text>
          <HStack gap={8}>
            <Flex alignItems={"center"}>
              <Text fontWeight={"500"}>Flavour</Text>
              <Box ml={4}>
                <Select>
                  {product?.color?.map((flavour) => (
                    <option value={flavour}>{flavour}</option>
                  ))}
                </Select>
              </Box>
            </Flex>
            <Flex alignItems={"center"}>
              <Text fontWeight={"500"}>Size</Text>
              <Box ml={4}>
                <Select>
                  {product?.size?.map((size) => (
                    <option value={size}>{size}</option>
                  ))}
                </Select>
              </Box>
            </Flex>
          </HStack>
          <Button>Add to Cart</Button>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default Product;
