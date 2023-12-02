import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Announcement = () => {
  return (
    <Flex bg={'teal'} w='full' h={8} fontWeight={'500'} justifyContent={'center'} alignItems={'center'}>
      <Heading fontSize={''}  color={'#FFF'} >Free 90 Minutes Delivery for Everyone!</Heading>
    </Flex>
  );
};

export default Announcement;
