import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: "Tajawal, sans-serif",

  colors: {
    // Add your color
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  headings: {
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
});
