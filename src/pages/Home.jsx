import React, { useEffect, useState } from "react";
import {
  VStack,
  Heading,
  HStack,
  Flex,
  Text,
  Select,
  Image,
} from "@chakra-ui/react";
import Slider from "../components/Slider";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        await axios
          .get("https://cakelaya.com/api/products")
          .then((res) => {
            setProducts(
              res.data.filter((product) => product.location[0] === "Sultanpur")
            );
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <VStack w="100%" mb={10}>
      <Slider />
      <VStack w="full" gap={10} px={4}>
        <Heading>All our Products</Heading>
        <HStack justifyContent={"space-between"} w="full">
          <HStack>
            <Text>Filter Products</Text>
            <Select placeholder="Quantity">
              <option value="0.5 Kg">0.5 Kg</option>
              <option value="1.5 Kg">1.5 Kg</option>
              <option value="2 Kg">2 Kg</option>
              <option value="2.25 L">2.25 L</option>
            </Select>
          </HStack>
          <HStack>
            <Text>Sort Products</Text>
            <Select>
              <option value="Newest">Newest</option>
              <option value="Price (asc)">{"Price (asc)"}</option>
              <option value="Price (desc)">{"Price (desc)"}</option>
            </Select>
          </HStack>
        </HStack>

        <Flex
          gap={6}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {products.map((product) => (
            <VStack
              key={product.id}
              gap={4}
              height={"350px"}
              minW={"280px"}
              border={"2px solid whitesmoke"}
              boxShadow={"rgba(0,0,0,0.35) 0px 5px 15px"}
              px={10}
              py={4}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image src={product.img} h={60} />
              <Text>{product.title}</Text>
              <Text>₹{product.price[0]}</Text>
            </VStack>
          ))}
        </Flex>
      </VStack>
    </VStack>
  );
};

export default Home;
