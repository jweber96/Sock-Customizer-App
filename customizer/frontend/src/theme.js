import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#2a4158',
        contrastText: '#ffff',   
        light: '#F5F5F5',
        dark: '#a9b3bc'  
    },
    secondary: {
        main: '#8c9ea3'
    },
  },
  error: {
      primary: {
          main: '#8b0000'
      }
  },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
      h5 : {
        fontFamily: "'Saira', sans-serif",
        fontWeight: 'bold',
        marginTop: 20, 
        marginBottom: 20
      },
      h6 : {
        fontFamily: "'Saira', sans-serif",
        fontWeight: 'bold',
        marginBottom: 8
      },
      subtitle2: {
        fontFamily: "'Ubuntu', sans-serif",
        marginBottom: 5
      },
      button: {
        fontFamily: "'Ubuntu', sans-serif",
      }
  },
});

export default theme