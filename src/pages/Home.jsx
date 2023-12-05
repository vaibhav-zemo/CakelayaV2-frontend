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
import { publicRequest } from "../requestMethods";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        await publicRequest
          .get("/products")
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
      <VStack w="full" gap={10}>
        <Heading
          bg={"teal"}
          fontSize={"5xl"}
          color={"#FFF"}
          w="full"
          textAlign={"center"}
          py={2}
        >
          All our Products
        </Heading>
        <HStack justifyContent={"space-between"} w="full" px={4}>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: 2, md: 4 }}
            alignItems={"center"}
          >
            <Text fontWeight={"500"}>Filter Products</Text>
            <Flex>
              <Select placeholder="Quantity">
                <option value="0.5 Kg">0.5 Kg</option>
                <option value="1.5 Kg">1.5 Kg</option>
                <option value="2 Kg">2 Kg</option>
                <option value="2.25 L">2.25 L</option>
              </Select>
            </Flex>
          </Flex>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            gap={{ base: 2, md: 4 }}
            alignItems={"center"}
          >
            <Text fontWeight={"500"}>Sort Products</Text>
            <Flex>
              <Select>
                <option value="Newest">Newest</option>
                <option value="Price (asc)">{"Price (asc)"}</option>
                <option value="Price (desc)">{"Price (desc)"}</option>
              </Select>
            </Flex>
          </Flex>
        </HStack>

        <Flex
          gap={6}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          {products.map((product) => (
            <Link key={product._id} to={`http://localhost:3000/product/${product._id}`} >
              <VStack
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
            </Link>
          ))}
        </Flex>
      </VStack>
    </VStack>
  );
};

export default Home;
