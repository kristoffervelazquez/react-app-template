import { createTheme } from "@mui/material";
import { esES as coreesES } from "@mui/material/locale";

const Theme = createTheme(
  {
    palette: {
      primary: {
        main: "#42A5F5",
      },
      secondary: {
        main: "#0F1924",
      },
      error: {
        main: "#FC3165",
      },
      background: {
        default: "#101418",
      },
      // text: {
      //   primary: "#FFFFFF",
      // },
      mode: "dark"
    },
  },
  coreesES
);

export default Theme;
