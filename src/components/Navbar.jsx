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
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack
      justifyContent={"space-between"}
      w="full"
      px={4}
      pt={1}
      alignItems={"center"}
    >
      <HStack alignItems={"center"}>
        <Link to="/">
          <Image src="/images/nav-logo.png" alt="Logo" w="168px" h="50px" />
        </Link>
        <HStack>
          <FaLocationDot fontSize={"23px"} />
          <ChevronDownIcon />
        </HStack>
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
            <MenuItem>About Us</MenuItem>
            <MenuItem>Privacy Policy</MenuItem>
          </MenuList>
        </Menu>
        <MdOutlineShoppingCart fontSize={"24px"} />
      </HStack>
    </HStack>
  );
};

export default Navbar;
