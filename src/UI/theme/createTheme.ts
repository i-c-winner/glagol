import { createTheme } from "@mui/material";
import { Theme } from "@mui/material";
import { ThemeOptions } from "@mui/material";


const theme = createTheme({
    palette: {
      primary: {
        main: '#c21515',
        dark: '#7ed726'
      },
      action: {
        hover: 'rgb(72,220,23)'
      }
    }
  },
);

export default theme