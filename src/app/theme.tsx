import { extendTheme } from "@chakra-ui/react";
import Button from "@/components/theme/Button";
import Link from "@/components/theme/Link";


const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
        fontSize: "16px",
        backgroundColor: "gray.800",
        "&::-webkit-scrollbar": {
          width: "4px",
          height: "4px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "gray.500",
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
          background: "rgba(147, 147, 147, 0.3)",
        },
      },
    },
  },
  components: {
    Button,
    Link,
  },
});

export default theme
