import React from "react";
import {
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";


export default function About(): React.ReactNode {

  const text = " is a family-owned collision repair center, proudly serving our customers for over three decades. Whether your vehicle has minor scratches or requires extensive repairs, we have the expertise to handle it all.";
  const image_streetview = "/shop/streetview-6.jpg";
  const image_shop = "/shop/shop-8.jpg";

  return (
    <Flex
      justifyContent="center"
    >
      <Flex
        flexDirection="column"
        position="relative"
        top="60px"
        left="80px"
        width="100%"
        maxWidth="500px"
        height="min-content"
        backgroundColor="gray.700"
        borderRadius="8px"
        boxShadow="12px 12px 12px rgba(0, 0, 0, 0.3)"
      >
        <Image
          src={image_streetview}
          objectFit="cover"
          width="100%"
          borderRadius="8px 8px 0 0"
        />
        <Text
          padding="20px 20px"
          color="gray.200"
          fontSize="18px"
        >
          <Text
            as="span"
            marginRight="2px"
            color="white"
            fontWeight="bold"
            fontStyle="italic"
            whiteSpace="nowrap"
          >
            Expo Auto Body
          </Text>
          {text}
        </Text>
      </Flex>
      <Flex>
        <Image
          src={image_shop}
          objectFit="cover"
          width="700px"
          borderRadius="8px"
          boxShadow="12px 12px 12px rgba(0, 0, 0, 0.5)"
        />
      </Flex>
    </Flex>
  );
}
