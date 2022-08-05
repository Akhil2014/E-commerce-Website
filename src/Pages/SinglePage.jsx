import { Button, Container, Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getData } from "../Redux/ApiReducer/action";
import { Badge, Grid, Image, Skeleton,Stack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const SinglePage = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const products = useSelector((s) => s.products);
  useEffect(() => {
    if (products.length === 0) {
      dispatch(getData());
    }
  });
  useEffect(() => {
    if (products.length >= id) {
      const currProduct = products[id - 1];
      currProduct && setData(currProduct);
    }
  }, [products, id]);
  return (
    <>
    <HStack justifyContent="space-evenly">
 
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={data.image} alt={data.image} />

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
              {data.category} &bull;
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            {data.title}
          </Box>

          <Box>
            $ {data.price}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < data.rating?.rate ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {data.rating?.count} reviews
            </Box>
          </Box>
        </Box>
      </Box>

      <Container border="1px solid gray" rounded="base" p="10px">
        <Heading>Description</Heading>
              <Text>{data.description}</Text>
              <br />
              <Text> $ {data.price}</Text>
              <br/>
              <Button colorScheme="messenger">Add to Cart</Button>
      </Container>
    </HStack>
    </>
  );
};

export default SinglePage;
