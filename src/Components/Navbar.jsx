import React from "react";
import { Flex, Heading, Stack, Text, Button, Box } from "@chakra-ui/react";
import { SiCampaignmonitor } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { BsCartCheck } from "react-icons/bs";
import { useSelector } from "react-redux";

const Navbar = () => {
  let activeStyle = {
    color: "#51cfdb",
  };
  let nonActiveStyle = {
    color: "gray",
  };
  const cart = useSelector((s) => s.CartReducer.cart);
  const isAuth = useSelector((s) => s.AuthReducer.isAuth)
  return (
    <Flex
      position=""
      w="100%"
      h="78px"
      bg="#111324"
      justifyContent="space-evenly"
    >
      <NavLink to="/">
        <Stack pt="26px" direction="row" w="220px">
          <SiCampaignmonitor size="24px" color="#7856ff" /> /
          <Heading
            _hover={{ cursor: "pointer" }}
            color="white"
            as="h1"
            size="md"
          >
            Shoppy Store
          </Heading>
        </Stack>
      </NavLink>
      <Stack
        pt="23px"
        pl="10px"
        justifyContent="center"
        direction="row"
        spacing={6}
        w="600px"
        color="gray.400"
      >
        <NavLink
          to="/products"
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
        >
          <Text
            _hover={{ color: "#51cfdb", cursor: "pointer" }}
            fontSize={["sm", "md", "lg", "xl"]}
          >
            Products
          </Text>
        </NavLink>
      </Stack>
      <Stack color="gray.400" pt="18px" direction="row" spacing={6} w="300px">
        <NavLink
          to="/cart"
          style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
        >
          <Text
            display={["none", "none", "block", "flex"]}
            _hover={{ color: "#51cfdb", cursor: "pointer" }}
            pt="5px"
            fontSize="xl"
          >
            <Flex>
              <BsCartCheck  size="20px" />
              <Text color={cart.length !== 0 ? "teal" : "aliceblue"} as="span">
                {cart.length}
              </Text>
            </Flex>
          </Text>
        </NavLink>
        <Link to="/login">
          <Button
            display={["none", "none", "block", "flex"]}
            _active="none"
            _hover="none"
            bg="#51cfdb"
            color="black"
          >
          {isAuth === true ? "Logout" : "Login"}
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
};

export default Navbar;
