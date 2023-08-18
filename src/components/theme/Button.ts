import { defineStyle, defineStyleConfig } from "@chakra-ui/react";


const underline = defineStyle({
  padding: "4px 8px",
  color: "gray.200",
  backgroundColor: "transparent",
  transition: "all 200ms linear",
  _before: {
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
  },
  _hover: {
    filter: "brightness(80%)",
    _before: { transform: "scaleX(1)" },
  },
  _active: { filter: "brightness(50%)" },
});

export default defineStyleConfig({
  variants: { underline },
})
