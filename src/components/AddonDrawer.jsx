import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,  
} from "@chakra-ui/react";
import { publicRequest } from "../requestMethods";
import AddonCard from "./AddonCard";

const AddonDrawer = ({ isOpen, onClose }) => {
  const [addons, setAddons] = useState([]);

  useEffect(() => {
    const getAddons = async () => {
      try {
        await publicRequest
          .get(`/products`)
          .then((res) => {
            setAddons(
              res.data.filter(
                (product) =>
                  product.categories && product?.categories[0] === "Addon"
              )
            );
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    getAddons();
  }, []);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add More Fun To Celebration.....</DrawerHeader>

          <DrawerBody>
            {addons.map((addon) => (
              <VStack key={addon._id}>
                <AddonCard addon={addon} />
              </VStack>
            ))}
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default AddonDrawer;
