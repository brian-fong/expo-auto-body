"use client"

import React, { useEffect } from "react";
import {
  Flex,
} from "@chakra-ui/react";
import NavHeader from "@/components/NavHeader";
import About from "@/components/About";
import Services from "@/components/Services";


export default function Page(): React.ReactNode {

  useEffect(() => {
    const window_width = window.innerWidth;
    const window_height = window.innerHeight;
    console.debug(`${window_width}px x ${window_height}px`);
  }, []);

  return (
    <Flex
      id="root"
      flexDirection="column"
      paddingBottom="100px"
      minWidth="1300px"
      minHeight="100vh"
      backgroundColor="gray.800"
    >
      <NavHeader />
      <About />
      <Flex
        id="body-container"
        justifyContent="center"
      >
        <Services />
      </Flex>
    </Flex>
  );
}
