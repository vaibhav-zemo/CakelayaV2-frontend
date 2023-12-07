import React, { useEffect, useState } from "react";
import {
  VStack,
  Heading,
  HStack,
  Flex,
  Text,
  Select,
  Image,
  Card,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
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

        <Grid
          px={4}
          gap={8}
          templateColumns={{
            base: "repeat(1, 1fr)",
            mob: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            tablet: "repeat(4, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
        >
          {products.map((product) => (
            <GridItem key={product._id}>
              <Link to={`/product/${product._id}`}>
                <Card
                  border={"2px solid whitesmoke"}
                  boxShadow={"rgba(0,0,0,0.35) 0px 5px 15px"}
                  h="400px"
                >
                  <CardBody display={'flex'} justifyContent={'center'} >
                    <Image
                      w={"250px"}
                      h={"250px"}
                      objectFit={"contain"}
                      src={product.img}
                    />
                  </CardBody>
                  <CardFooter w="full">
                    <VStack fontWeight={"500"} alignItems={"center"} w="full">
                      <Text textAlign={"center"}>{product.title}</Text>
                      <Text>₹ {product.price[0]}</Text>
                    </VStack>
                  </CardFooter>
                </Card>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </VStack>
  );
};

export default Home;
