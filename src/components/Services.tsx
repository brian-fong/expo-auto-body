import React from "react";
import {
  Flex,
  Heading,
} from "@chakra-ui/react";
import { SERVICES } from "@/utils/services";
import Service from "./Service";


export default function Services(): React.ReactNode {
  return (
    <Flex
      flexDirection="column"
      marginTop="150px"
      maxWidth="800px"
      backgroundColor="gray.700"
      borderRadius="8px"
      boxShadow="12px 12px 12px rgba(0, 0, 0, 0.3)"
    >
      <Heading
        position="relative"
        top="-20px"
        left="-30px"
        padding="8px 16px"
        width="min-content"
        color="white"
        fontSize="24px"
        whiteSpace="nowrap"
        backgroundColor="gray.600"
        borderRadius="4px"
        boxShadow="12px 12px 12px rgba(0, 0, 0, 0.3)"
      >
        Services Offered:
      </Heading>
      <Flex
        id="services-container"
        flexDirection="column"
        gap="40px"
        padding="20px 40px 40px"
        color="gray.200"
      >
        {SERVICES.map((service, i) => (
          <Service
            key={i}
            service={service}
          />
        ))}
      </Flex>
    </Flex>
  );
}
