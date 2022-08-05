import React, { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { CloseIcon, StarIcon, ViewIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cartArrayPost, cartSuccess, deleteCart } from "../Redux/CartReducer/action";

const Cart = () => {
  const cartData = useSelector((s) => s.CartReducer.cart);
  const [cart , setCart] = useState(cartData)
  const [price,setPrice] = useState(0)
  const dispatch = useDispatch();
  useEffect(() => {
    const result = cart.reduce(function (acc, obj) {
      return acc + obj.price;
    }, 0);
   
    setPrice( Number.parseFloat(result).toFixed(2))
  }, [cart,cartData]);

  const handleDelete = (id) => {
    const newData = cart.filter((e) => e.id !== id)
    dispatch(cartArrayPost(newData));
    setCart(newData)
    console.log(cartData)
   
  }
  const handleDeleteAll = () => {
    setCart([])
    dispatch(deleteCart())
  }
  return (
    <Flex justifyContent="space-evenly" >
      <Box display={cart.length === 0 ? "none" : "block"} border="2px solid gray" rounded="10px"> 
        {cart.length > 0 &&
          cart?.map((data) => {
            return (
              <>
                <HStack>
                  <Box h="200px">
                    <Image w="200px" h="100%" src={data.image} />
                  </Box>
                  <Box w="400px">
                    <Text>{data.title}</Text>
                    <Text>{data.price}</Text>
                  </Box>
                  <VStack>
                    <Button onClick={() => handleDelete(data.id)}>
                      <CloseIcon />
                    </Button>
                  </VStack>
                </HStack>
                <Divider />
              </>
            );
          })}
      </Box>
      <Box h="300px"  w="400px" mt="50px" rounded={10} border="4px solid gray">
        <Box textAlign="center">
          <Heading>Payment Details</Heading>
        </Box>
        <br />
        <Divider />
        <Box>
          <Heading as="h3">Total Items {cart.length}</Heading>
          <br />
          <Heading as="h3">Total Price {price}</Heading>
          <br />
          <Button colorScheme="linkedin" onClick={handleDeleteAll}>Delete all</Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Cart;
