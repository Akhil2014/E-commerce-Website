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
import { Link } from "react-router-dom";
import Card from "./Card";

const Data = () => {
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
      {isError && <Heading>Somethings is wrong!</Heading>}
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {products.length > 0 &&
          products.map((property) => {
            return (
               <Card key={property.id} property={property} />
            );
          })}
      </Grid>
    </>
  );
};

export default Data;
