"use client";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";


export default function Providers({
  children
}: {
  children: React.ReactNode,
}): React.ReactNode {

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}
