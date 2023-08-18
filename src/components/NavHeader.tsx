import {
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react"
import {
  BsPinMapFill as MapIcon,
  BsTelephoneFill as PhoneIcon,
} from "react-icons/bs";


export default function NavHeader(): React.ReactNode {
  return (
    <Flex
      position="fixed"
      gap="20px"
      padding="15px"
      width="100%"
      alignItems="center"
      backgroundColor="rgba(0, 0, 0, 0.3)"
      backdropFilter="blur(12px)"
      zIndex={2}
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
        gap="40px"
        marginLeft="auto"
        padding="0 20px"
        alignItems="center"
      >
        <Link
          href="tel:626-279-1900"
          variant="underline"
          target="_blank"
          draggable={false}
        >
          <Flex
            alignItems="center"
            gap="10px"
            color="gray.200"
          >
            <PhoneIcon size="16px" />
            <Text
              whiteSpace="nowrap"
            >
              (626) 279-1900
            </Text>
          </Flex>
        </Link>
        <Link
          href="https://www.google.com/maps/place/Expo+Auto+Body/@34.0901641,-118.0519663,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2da6ec8303217:0x5d84f3d19c7edd9!8m2!3d34.0901597!4d-118.0493914!16s%2Fg%2F1tfwds5g?entry=ttu"
          variant="underline"
          target="_blank"
          draggable={false}
        >
          <Flex
            alignItems="center"
            gap="10px"
            color="gray.200"
          >
            <MapIcon size="16px" />
            <Text
              whiteSpace="nowrap"
            >
              4535 Baldwin Ave El Monte, CA 91731
            </Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
}
