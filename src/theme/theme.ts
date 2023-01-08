import { blue, blueGrey } from '@mui/material/colors';
import { createStyled, createTheme } from '@mui/system';

export const theme = createTheme({
  palette: {
    primary: {
      dark: blue[900],
      light: '',
      main: blue[300]
    },
    secondary: {
      dark: '',
      light: '',
      main: ''
    },
    background: {
      dark: blueGrey[900],
      light: blueGrey[400],
      main: blueGrey[700]
    },
    text: {
      black: 'black',
      white: 'white'
    }
  }
});

export const styled = createStyled({ defaultTheme: theme });
