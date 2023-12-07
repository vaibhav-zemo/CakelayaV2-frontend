import React from "react";
import {
  Heading,
  Text,
  HStack,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <VStack>
      <Grid
        px={4}
        templateColumns={{ base: "", md: "repeat(3, 1fr)" }}
        templateRows={{ base: "repeat(1, 1fr)", md: "" }}
        gap={8}
        id="footer"
      >
        <GridItem display={"flex"} flexDir={"column"} gap={4}>
          <Heading>About Cakeलाया ?</Heading>
          <Text>
            Cakeलाया ? is a start-up based on delivering cakes and other
            savouries to your room at your convenience. All you need is just to
            take a chill pill, enjoy the occasion with your closed ones and let
            us take care of all your cake and zingy needs!
          </Text>
          <HStack>
            <FaFacebookSquare fontSize={"40px"} color="#4267B2" />
            <FaInstagramSquare fontSize={"40px"} color="#E4405F" />
            <FaLinkedin fontSize={"40px"} color="#0A66C2" />
          </HStack>
        </GridItem>
        <GridItem display={"flex"} flexDir={"column"}>
          <Heading fontSize={"lg"}>Useful Links</Heading>
          <HStack gap={20} mt={4} mb={2}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </HStack>
          <Link to={'/privacy-policy'} >Privacy Policy</Link>
        </GridItem>
        <GridItem display={"flex"} flexDir={"column"} gap={4}>
          <Heading fontSize={"lg"}>Contact</Heading>
          <HStack alignItems={"center"}>
            <FaLocationDot />
            <Text>KNIT Sultanpur, U.P</Text>
          </HStack>
          <HStack alignItems={"center"}>
            <MdOutlineEmail />
            <Link to="mailto:support@cakelaya.com">support@cakelaya.com</Link>
          </HStack>
        </GridItem>
      </Grid>
      <Text py={1} bg={'teal'} w='full' color={'#FFF'} textAlign={'center'} >Copyright © 2023 ZESTEASE FOODTECH PRIVATE LIMITED®. All rights reserved</Text>
    </VStack>
  );
};

export default Footer;
