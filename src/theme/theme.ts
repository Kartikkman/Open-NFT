import { MantineGradient, MantineThemeOverride } from "@mantine/core";

export const linearGradients: { [key: string]: MantineGradient } = {
  primary: { from: "#0000EB", to: "#004BFB", deg: 108.08 },
  secondary: { from: "#FF9C00", to: "#FFDB03", deg: 108.08 },
  accent: { from: "#0038F5", to: "#9F03FF", deg: 114.44 },
  black: { from: "#434343", to: "#000000", deg: 90 }
};


export const litColors = {
  titleActive: "#222222",
  body: "#333333",
  label: "#555555",
  placeholder: "#888888",
  line: "#DCDCDC",
  inputBg: "#F0F0F0",
  bg: "#F8F8F8",
  offWhite: "#FCFCFC",
  primary: "#002EF1",
  secondary: "#FFB802",
  error: "#FE3F61",
  success: "#009846",
  warning: "#FF6711",
};

const myTheme: MantineThemeOverride = {
  colorScheme: "light",
  primaryColor: "blue",
  colors: {
    blue: [
      "#CBCFE0",
      "#AEB6D6",
      "#909DD1",
      "#7082D1",
      "#4C67D8",
      "#2348E7",
      "#002EF1",
      "#1637C3",
      "#233BA0",
      "#2B3C85",
    ],
    yellow: [
      "#EBE7DC",
      "#DFD6BF",
      "#D8C8A1",
      "#D6BE80",
      "#DBB75C",
      "#E8B532",
      "#FFB802",
      "#D09C17",
      "#AB8525",
      "#8E732E",
    ],
    error: [
      "#E9D9DC",
      "#E2C6CB",
      "#DEB2BA",
      "#DE9BA7",
      "#E38193",
      "#ED637C",
      "#FE3F61",
      "#E9415F",
      "#D5435D",
      "#C2455B",
    ],
    sucess: [
      "#50886A",
      "#448763",
      "#39875D",
      "#2C8957",
      "#1F8C51",
      "#10914B",
      "#009846",
      "#0E8143",
      "#186E40",
      "#1F5F3D",
    ],
    warning: [
      "#D1BCB1",
      "#CEAF9E",
      "#CEA28A",
      "#D29572",
      "#DA8757",
      "#E97837",
      "#FF6711",
      "#E6641A",
      "#C5632B",
      "#AB6137",
    ],
    titleActive: [
      "#303030",
      "#2D2D2D",
      "#2B2B2B",
      "#282828",
      "#262626",
      "#242424",
      "#222222",
      "#202020",
      "#1E1E1E",
      "#1C1C1C",
    ],
    body: [
      "#484848",
      "#444444",
      "#404040",
      "#3D3D3D",
      "#393939",
      "#363636",
      "#333333",
      "#303030",
      "#2D2D2D",
      "#2A2A2A",
    ],
    label: [
      "#484848",
      "#444444",
      "#404040",
      "#3D3D3D",
      "#393939",
      "#363636",
      "#555555",
      "#303030",
      "#2D2D2D",
      "#2A2A2A",
    ],
    placeholder: [
      "#484848",
      "#444444",
      "#404040",
      "#3D3D3D",
      "#393939",
      "#363636",
      "#888888",
      "#303030",
      "#2D2D2D",
      "#2A2A2A",
    ],
    line: [
      "#484848",
      "#444444",
      "#404040",
      "#3D3D3D",
      "#393939",
      "#363636",
      "#DCDCDC",
      "#303030",
      "#2D2D2D",
      "#2A2A2A",
    ],
    inputBg: [
      "#484848",
      "#444444",
      "#404040",
      "#3D3D3D",
      "#393939",
      "#363636",
      "#F0F0F0",
      "#303030",
      "#2D2D2D",
      "#2A2A2A",
    ],
    bg: [
      "#484848",
      "#444444",
      "#404040",
      "#3D3D3D",
      "#393939",
      "#363636",
      "#F8F8F8",
      "#303030",
      "#2D2D2D",
      "#2A2A2A",
    ],
    offWhite: [
      "#484848",
      "#444444",
      "#404040",
      "#3D3D3D",
      "#393939",
      "#363636",
      "#FCFCFC",
      "#303030",
      "#2D2D2D",
      "#2A2A2A",
    ],
  },
  components: {

    Modal: {
      styles: (theme) => ({
        modal: {
          /* padding: "20px 15px !important", */
          borderRadius: "24px"
        },
        header: {
          margin: 0,
        },
        close: {
          alignSelf: "flex-start",
          svg: {
            width: "24px",
            height: "24px",
            stroke: theme.other.colors.label,
            strokeWidth: 0.3,
          }
        }
      })
    },
    Switch: {
      styles:  (theme) => ({
        input: {
          backgroundColor: litColors.placeholder,
          "&:checked": {
            background: theme.fn.gradient(theme.other.litGradients.accent),
          },
        },
      })

    }

  },
  defaultRadius: "md",
  fontFamily: "Epilogue, sans-serif",
  fontFamilyMonospace: "Epilogue, sans-serif",
  fontSizes: { lg: 24, md: 18, sm: 16, xs: 14 },
  headings: {
    fontFamily: "Epilogue, sans-serif",
    fontWeight: "bold",
  },
  other: {
    colors: litColors,
    litGradients: linearGradients,
  },
};

export default myTheme;
