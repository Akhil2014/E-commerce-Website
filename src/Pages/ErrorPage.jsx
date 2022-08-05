import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <Box padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    </div>
  );
};

export default ErrorPage;
