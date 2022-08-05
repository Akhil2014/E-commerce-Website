import React from "react";
import { useEffect } from "react";
import {
  Badge,
  Box,
  Grid,
  Heading,
  Image,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/ApiReducer/action";
import { StarIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Data = () => {
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector((s) => s);
 
  useEffect(() => {
    dispatch( getData())
  }, []);
  return (
    <>
      {isLoading && (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      )}
      {isError && <Heading>Somethings is wrong!</Heading>}
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {products.length > 0 &&
          products.map((property) => {
            return (
                <Link to={`single/${property.id}`} >
              <Box
                key={property.id}
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  h="300px"
                  w="100%"
                  _hover={{ size: "120%" }}
                  src={property.image}
                  alt={property.image}
                />

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
                          color={
                            i < property.rating.rate ? "teal.500" : "gray.300"
                          }
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {property.rating.count} reviews
                    </Box>
                  </Box>
                </Box>
              </Box>
              </Link>
            );
          })}
      </Grid>
    </>
  );
};

export default Data;
