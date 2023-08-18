"use client"

import React, { useEffect } from "react";
import {
  Flex,
  Image,
} from "@chakra-ui/react";
import NavHeader from "@/components/NavHeader";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";


export default function Page(): React.ReactNode {

  const image_shop = "/shop/shop-8.jpg";

  useEffect(() => {
    const window_width = window.innerWidth;
    const window_height = window.innerHeight;
    console.debug(`${window_width}px x ${window_height}px`);
  }, []);

  return (
    <Flex
      id="root"
      flexDirection="column"
      minHeight="100vh"
    >
      <NavHeader />
      <Image
        src={image_shop}
        objectFit="cover"
        width="100vw"
        height="600px"
        draggable={false}
      />
      <About />
      <Services />
      <Contact />
    </Flex>
  );
}
