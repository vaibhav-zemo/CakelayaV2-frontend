import React from "react";
import {
  HStack,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SetLocation from "./SetLocation";

const Navbar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      w="full"
      px={4}
      py={1}
      alignItems={"center"}
    >
      <HStack alignItems={"center"}>
        <Link to="/">
          <Image src="/images/nav-logo.png" alt="Logo" w="168px" h="50px" />
        </Link>
        <SetLocation />
      </HStack>
      <HStack alignItems={"center"} gap={12}>
        <Link>Gift System</Link>
        <Menu>
          <MenuButton>
            <HStack alignItems={"center"}>
              <Text>Account</Text>
              <ChevronDownIcon />
            </HStack>
          </MenuButton>
          <MenuList zIndex={100} >
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
        <HashLink to="#footer">Contact Us</HashLink>
        <MdOutlineShoppingCart fontSize={"24px"} />
      </HStack>
    </HStack>
  );
};

export default Navbar;
