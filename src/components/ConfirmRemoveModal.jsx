import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ConfirmRemoveModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered={true} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Removal?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to remove this item?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Cancel
            </Button>
            <Button colorScheme="red">Delete</Button>
          </ModalFooter>
        </ModalContent>
    </Modal>
  );
};

export default ConfirmRemoveModal;
