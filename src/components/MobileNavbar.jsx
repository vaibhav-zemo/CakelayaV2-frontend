import React from "react";
import {
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  Text,
  MenuList,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import SetLocation from "./SetLocation";

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack gap={0} justifyContent={"space-between"} px={4} pt={1}>
      <HStack>
        <Link to="/">
          <Image src="/images/nav-logo.png" alt="Logo" w="168px" h="50px" />
        </Link>
        <SetLocation />
      </HStack>
      <HStack gap={4}>
        <MdOutlineShoppingCart fontSize={"24px"} />
        <Menu>
          <MenuButton onClick={onOpen}>
            <HamburgerIcon fontSize={"25px"} />
          </MenuButton>
        </Menu>
      </HStack>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody display={"flex"} alignItems={"center"} pl={10}>
              <VStack gap={8} alignItems={"start"}>
                <Link>Gift System</Link>
                <Menu>
                  <MenuButton>
                    <HStack alignItems={"center"}>
                      <Text>Account</Text>
                      <ChevronDownIcon />
                    </HStack>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>My Profile</MenuItem>
                    <MenuItem>My Orders</MenuItem>
                    <MenuItem>Admin</MenuItem>
                    <MenuItem>Sign Out</MenuItem>
                  </MenuList>
                </Menu>
                <Menu>
                  <MenuButton>
                    <HStack alignItems={"center"}>
                      <Text>More</Text>
                      <ChevronDownIcon />
                    </HStack>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link to={"/about"}>About Us</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to={"/privacy-policy"}>Privacy Policy</Link>
                    </MenuItem>
                  </MenuList>
                </Menu>
                <HashLink to="#footer" onClick={onClose}>
                  Contact Us
                </HashLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </HStack>
  );
};

export default MobileNavbar;
