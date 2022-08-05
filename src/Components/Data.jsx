import React from "react";
import { useEffect } from "react";
import {
  Badge,
  Box,
  Grid,
  Heading,
  Image,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/ApiReducer/action";
import { Link } from "react-router-dom";
import Card from "./Card";

const Data = () => {
  const array = new Array(20).fill(0);
  const dispatch = useDispatch();
  const { products, isLoading, isError } = useSelector((s) => s.ApiReducer);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getData());
    }
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
      {isError && (
        <>
          <Box textAlign="center">
            <Heading color="red.400">SOMETHING WRONG!</Heading>
          </Box>
          <Grid templateColumns="repeat(5, 1fr)" gap={8}>
            {array.map((i) => {
              return (
                <Box padding="6" boxShadow="lg" bg="dark">
                  <SkeletonCircle size="10" />
                  <SkeletonText mt="4" noOfLines={4} spacing="4" />
                </Box>
              );
            })}
          </Grid>
        </>
      )}
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {products.length > 0 &&
          products.map((property) => {
            return <Card key={property.id} property={property} />;
          })}
      </Grid>
    </>
  );
};

export default Data;
