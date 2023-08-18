import {
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import React from "react"


export default function NavHeader(): React.ReactNode {
  return (
    <Flex
      gap="20px"
      margin="20px 20px 40px"
      alignItems="center"
    >
      <Image
        src="/logo.png"
        objectFit="contain"
        maxWidth="100px"
        draggable={false}
      />
      <Image
        src="/logo-car.png"
        objectFit="contain"
        maxWidth="100px"
        draggable={false}
      />
      <Flex
        gap="20px"
        marginLeft="auto"
        padding="0 20px"
      >
        <Button
          padding="0"
          color="gray.200"
          backgroundColor="transparent"
          transition="all 200ms linear"
          _before={{
            content: '""',
            position: "absolute",
            display: "block",
            width: "100%",
            height: "2px",
            bottom: "0",
            left: "0",
            backgroundColor: "gray.200",
            transform: "scaleX(0)",
            transformOrigin: "top center",
            transition: "transform 200ms ease",
          }}
          _hover={{
            filter: "brightness(80%)",
            _before: { transform: "scaleX(1)" },
          }}
          _active={{ filter: "brightness(50%)" }}
        >
          Contact
        </Button>
      </Flex>
    </Flex>
  );
}
