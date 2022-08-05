import React from "react";
import {
  Badge,
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import {
  StarIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Cart = () => {
  const cart = useSelector((s) => s.CartReducer.cart);
  useEffect(() => { 
    const result = cart.reduce(function (acc, obj) { return acc + obj.price; }, 0);
    console.log(result)
  },[cart])
  return (
    <div>
      {cart.length > 0 &&
        cart?.map((property) => {
          return (
            <Heading>{property.title}</Heading>
          );
        })}
    </div>
  );
};

export default Cart;
