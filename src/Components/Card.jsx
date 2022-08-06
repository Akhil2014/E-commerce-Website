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
  ArrowForwardIcon,
  EmailIcon,
  StarIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartSuccess } from "../Redux/CartReducer/action";
import { useToast } from "@chakra-ui/react";

const Card = ({ property }) => {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.CartReducer.cart);
  const toast = useToast();
  const isAuth = useSelector((s) => s.AuthReducer.isAuth);
  const handleCart = (item) => {
    if (!isAuth) {
      alert(" Please! Login our website");
    } else {
      if (cart.includes(item)) {
        alert("Product is already present in the cart");
      } else {
        dispatch(cartSuccess(item));
        toast({
          title: "Product added in cart.",
          description: "Thanx for choosing this product",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }
    }
  };
  return (
    <>
      <Box
        _hover={{ border: " 1px solid white" }}
        key={property.id}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image h="300px" w="100%" src={property.image} alt={property.image} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {property.category} &bull;
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {property.title}
          </Box>

          <Box>
            ₹ {property.price}
            <Box as="span" color="gray.600" fontSize="sm"></Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < property.rating.rate ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.rating.count} reviews
            </Box>
          </Box>
        </Box>
        <HStack justifyContent="space-evenly">
          <Link to={`single/${property.id}`}>
            <Button leftIcon={<ViewIcon />} colorScheme="teal" variant="solid">
              More Details
            </Button>
          </Link>
          <Button
            onClick={() => handleCart(property)}
            rightIcon={<BsCartCheckFill />}
            colorScheme="teal"
            variant="outline"
          >
            Add to cart
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default Card;
