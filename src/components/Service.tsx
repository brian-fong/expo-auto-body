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
      backgroundColor="gray.600"
      borderRadius="8px"
      boxShadow="12px 12px 12px rgba(0, 0, 0, 0.3)"
    >
      <Image
        src={service.image}
        objectFit="cover"
        objectPosition="30% center"
        width="150px"
        height="150px"
        borderRadius="8px 0 0 8px"
      />
      <Flex
        flexDirection="column"
        width="100%"
        height="min-content"
      >
        <Heading
          marginBottom="5px"
          padding="5px 20px 5px"
          width="100%"
          color="white"
          fontSize="18px"
          backgroundColor="rgba(0, 0, 0, 0.3)"
        >
          {service.name}
        </Heading>
        <Text
          padding="5px 20px 20px"
          color="gray.200"
          fontSize="16px"
        >
          {service.description}
        </Text>
      </Flex>
    </Flex>
  );
}
