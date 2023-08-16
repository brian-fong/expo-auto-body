import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
        fontSize: "16px",
        backgroundColor: "gray.800",
      },
    },
  },
});

export default theme
