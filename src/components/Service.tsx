import React from "react";
import {
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Service } from "@/utils/services";


export default function Service({
  service
}: {
  service: Service
}): React.ReactNode {

  return (
    <Flex
      width="100%"
      backgroundColor="gray.600"
      borderRadius="8px"
      boxShadow="12px 12px 12px rgba(0, 0, 0, 0.3)"
    >
      <Image
        src={service.image}
        objectFit="cover"
        objectPosition="center center"
        width="220px"
        height="220px"
        borderRadius="8px 0 0 8px"
        backgroundColor="rgba(0, 0, 0, 0.2)"
        draggable={false}
      />
      <Flex
        flexDirection="column"
        width="100%"
        height="min-content"
        borderRadius="8px"
      >
        <Heading
          padding="10px 20px"
          width="100%"
          color="white"
          fontSize="18px"
          backgroundColor={service.color}
          borderRadius="0 8px 0 0"
        >
          {service.name}
        </Heading>
        <Text
          padding="10px 20px"
          color="gray.200"
          fontSize="16px"
        >
          {service.description}
        </Text>
      </Flex>
    </Flex>
  );
}
