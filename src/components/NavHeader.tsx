import { CONTACT_DICT } from "@/utils/contact";
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
        src="/logo-horizontal.png"
        objectFit="contain"
        maxWidth="200px"
        draggable={false}
      />
      <Flex
        gap="40px"
        marginLeft="auto"
        padding="0 20px"
        alignItems="center"
      >
        <Link
          href={CONTACT_DICT.phone.link}
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
              {CONTACT_DICT.phone.value}
            </Text>
          </Flex>
        </Link>
        <Link
          href={CONTACT_DICT.address.link}
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
              {CONTACT_DICT.address.value}
            </Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  );
}
