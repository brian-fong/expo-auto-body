"use client"

import React, { useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";


export default function Page(): React.ReactNode {

  useEffect(() => {
    const window_width = window.innerWidth;
    const window_height = window.innerHeight;
    console.debug(`${window_width}px x ${window_height}px`)
  }, []);

  return (
    <Flex
      id="root"
      flexDirection="column"
      minWidth="100vw"
      minHeight="100vh"
      backgroundColor="gray.800"
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        marginTop="50px"
      >
        <Box
          maxWidth="400px"
        >
          <Image
            src="/expo-auto-body-logo.png"
            objectFit="contain"
          />
        </Box>
        <Heading
          color="white"
          fontWeight="normal"
        >
          Expo Auto Body website under construction 🏗️
        </Heading>
      </Flex>
    </Flex>
  );
}
