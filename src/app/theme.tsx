import { extendTheme } from "@chakra-ui/react";


const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "white",
        fontSize: "16px",
        backgroundColor: "gray.800",
        "&::-webkit-scrollbar": {
          width: "4px",
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
});

export default theme
