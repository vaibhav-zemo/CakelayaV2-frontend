import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaLocationDot } from "react-icons/fa6";

const SetLocation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HStack onClick={onOpen} cursor={"pointer"}>
        <FaLocationDot fontSize={"23px"} />
        <ChevronDownIcon />
      </HStack>
      <Modal isOpen={isOpen} isCentered={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={80} py={4} >
          <ModalHeader textAlign={"center"}>Select Your City</ModalHeader>
          <ModalBody mt={4} justifyContent={"center"} display={"flex"} gap={4}>
            <Button onClick={onClose}>Sultanpur</Button>
            <Button onClick={onClose}>Noida</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SetLocation;
