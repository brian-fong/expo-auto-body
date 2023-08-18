import React from "react";
import {
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { SERVICES } from "@/utils/services";
import Service from "./Service";


export default function Services(): React.ReactNode {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      position="relative"
      padding="80px"
      backgroundColor="gray.800"
      borderTopWidth="4px"
      borderTopStyle="solid"
      borderTopColor="gray.500"
    >
      <Heading
        position="absolute"
        top="-32px"
        padding="16px 24px"
        width="min-content"
        color="white"
        fontSize="24px"
        whiteSpace="nowrap"
        backgroundColor="gray.800"
        borderWidth="4px"
        borderStyle="solid"
        borderColor="gray.500"
        borderRadius="4px"
      >
        Our Services
      </Heading>
      <Text
        marginBottom="40px"
        fontSize="18px"
      >
        Note: we provide
        <Text
          as="span"
          fontStyle="italic"
          fontWeight="bold"
        > free </Text>
        estimates and vehicle diagnoses. Please call in to make an 
        appointment!
      </Text>
      <Grid
        id="services-container"
        gridTemplateColumns="repeat(auto-fill, minmax(500px, 1fr))"
        gap="60px"
        width="100%"
        color="gray.200"
      >
        {SERVICES.map((service, i) => (
          <Service
            key={i}
            service={service}
          />
        ))}
      </Grid>
    </Flex>
  );
}
