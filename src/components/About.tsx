import React from "react";
import {
  Flex,
  Grid,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";


export default function About(): React.ReactNode {

  const text = " is a family-owned collision repair center, proudly serving our customers for over three decades. Whether your vehicle has minor scratches or requires extensive repairs, we have the expertise to handle it all.";
  const image_streetview = "/shop/streetview-6.jpg";
  const image_office = "/shop/office.jpg";
  const image_lot = "/shop/lot-2.jpg";

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      position="relative"
      padding="60px 80px 80px"
      width="100%"
      backgroundColor="gray.700"
      borderTopWidth="4px"
      borderTopStyle="solid"
      borderTopColor="red.500"
    >
      <Heading
        position="absolute"
        top="-32px"
        padding="16px 64px"
        width="min-content"
        color="white"
        fontSize="24px"
        whiteSpace="nowrap"
        backgroundColor="gray.700"
        borderWidth="4px"
        borderStyle="solid"
        borderColor="red.500"
        borderRadius="4px"
      >
        About Us
      </Heading>
      <Flex
        flexDirection="column"
        alignItems="center"
      >
        <Text
          marginBottom="40px"
          maxWidth="1200px"
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

        <Grid
          gridTemplateColumns="1fr 1fr 1fr"
          gap="40px"
        >
          <Image
            src={image_streetview}
            objectFit="cover"
            objectPosition="center 10%"
            borderRadius="8px"
            boxShadow="12px 12px 12px rgba(0, 0, 0, 0.3)"
            draggable={false}
          />

          <Image
            src={image_office}
            objectFit="cover"
            borderRadius="8px"
            boxShadow="12px 12px 12px rgba(0, 0, 0, 0.3)"
            draggable={false}
          />

          <Image
            src={image_lot}
            objectFit="cover"
            borderRadius="8px"
            boxShadow="12px 12px 12px rgba(0, 0, 0, 0.3)"
            draggable={false}
          />
        </Grid>
      </Flex>
    </Flex>
  );
}
