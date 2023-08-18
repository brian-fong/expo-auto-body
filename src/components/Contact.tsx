import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import {
  BsBoxArrowUpRight as LinkIcon,
} from "react-icons/bs";
import { HOURS } from "@/utils/hours";
import { CONTACT_INFO } from "@/utils/contact";

export default function Services(): React.ReactNode {

  const image_streetview = "/shop/streetview-1.jpg";

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      position="relative"
      padding="80px"
      backgroundColor="gray.600"
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
        backgroundColor="gray.600"
        borderWidth="4px"
        borderStyle="solid"
        borderColor="gray.500"
        borderRadius="4px"
      >
        Contact
      </Heading>
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        gap="40px"
        width="100%"
      >
        <Flex
          flexDirection="column"
          gap="40px"
        >
          <Text
            maxWidth="700px"
            fontSize="18px"
          >
            Give us a call to set up an appointment and we'll do our
            best to restore your vehicle and get you back on the road
            safely!
          </Text>

          <Flex
            gap="100px"
            height="min-content"
          >
            <Flex
              flexDirection="column"
              width="min-content"
              minWidth="250px"
              height="min-content"
            >
              <Heading
                marginBottom="4px"
                fontSize="20px"
                textDecoration="underline"
              >
                Hours of Operation
              </Heading>
              <Flex
                gap="30px"
              >
                <Flex
                  flexDirection="column"
                  width="100%"
                >
                  {HOURS.map((hour, i) => (
                    <Text
                      key={i}
                      fontSize="18px"
                    >
                      {hour.day}
                    </Text>
                  ))}
                </Flex>
                <Flex
                  flexDirection="column"
                  width="100%"
                >
                  {HOURS.map((hour, i) => (
                    <Text
                      key={i}
                      fontSize="18px"
                      whiteSpace="nowrap"
                    >
                      {hour.availability}
                    </Text>
                  ))}
                </Flex>
              </Flex>
            </Flex>

            <Flex
              flexDirection="column"
            >
              <Heading
                marginBottom="4px"
                fontSize="20px"
                textDecoration="underline"
              >
                Contact Info
              </Heading>
              <Flex
                gap="30px"
              >
                <Flex
                  flexDirection="column"
                  width="100%"
                >
                  {CONTACT_INFO.map((contact, i) => (
                    <Text
                      key={i}
                      fontSize="18px"
                    >
                      {contact.type}
                    </Text>
                  ))}
                </Flex>
                <Flex
                  flexDirection="column"
                  width="100%"
                >
                  {CONTACT_INFO.map((contact, i) => (
                    <Link
                      key={i}
                      width="min-content"
                      fontSize="18px"
                      whiteSpace="nowrap"
                      borderBottom="1px solid transparent"
                      transition="all 100ms linear"
                      _hover={{
                        borderBottom: "1px solid white",
                        filter: "brightness(70%)",
                      }}
                      _active={{ filter: "brightness(50%)" }}
                    >
                      {contact.value}
                    </Link>
                  ))}
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          flexDirection="column"
          width="100%"
          minWidth="600px"
          maxWidth="800px"
          backgroundColor="blue.700"
          borderRadius="8px"
          boxShadow="12px 12px 12px rgba(0, 0, 0, 0.3)"
        >
          <Image
            src={image_streetview}
            objectFit="cover"
            objectPosition="20% 40%"
            width="800px"
            height="400px"
            borderRadius="8px 8px 0 0"
            draggable={false}
          />
          <Text
            padding="20px"
          >
            {"We are located at "}
            <Link
              href="https://www.google.com/maps/place/Expo+Auto+Body/@34.0901641,-118.0519663,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2da6ec8303217:0x5d84f3d19c7edd9!8m2!3d34.0901597!4d-118.0493914!16s%2Fg%2F1tfwds5g?entry=ttu"
              target="_blank"
              display="inline-flex"
              alignItems="center"
              gap="6px"
              marginLeft="4px"
              color="white"
              fontSize="16px"
              fontWeight="bold"
              borderBottom="1px solid transparent"
              draggable={false}
              transition="all 100ms linear"
              _hover={{
                borderBottom: "1px solid white",
                filter: "brightness(70%)",
              }}
              _active={{ filter: "brightness(50%)" }}
            >
              4535 Baldwin Ave El Monte, CA 91731
              <LinkIcon
                size="16px"
                style={{
                  position: "relative",
                  top: "-2px",
                }}
              />
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
