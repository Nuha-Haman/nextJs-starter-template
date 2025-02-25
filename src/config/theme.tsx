import { Checkbox, createTheme, rem, TextInput } from "@mantine/core";

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

  components: {
    TextInput: {
      styles: {
        label: {
          fontSize: rem(18),
          fontWeight: 600,
          color: "#212529",
        },
        description: {
          fontSize: rem(16),
          fontWeight: 400,
          color: "#868E96",
        },
        input: {
          fontSize: rem(18),
          marginTop: rem(6),
          borderRadius: 12,
          padding: "2px 16px",
          height: "auto",
        },
      },
    },
    Checkbox: {
      styles: {
        label: {
          fontSize: rem(16),
          fontWeight: 500,
          color: "#000",
        },
        input: {
          borderRadius: 6,
        },
      },
    },
    Textarea: {
      styles: {
        label: {
          fontSize: rem(18),
          fontWeight: 600,
          color: "#212529",
        },
        input: {
          fontSize: rem(18),
          marginTop: rem(6),
          borderRadius: 12,
          padding: "2px 16px",
          height: "auto",
        },
      },
    },
  },
});
