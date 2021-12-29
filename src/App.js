import logo from './logo.svg';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';


const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7B9E',
      contrastText: '#fff',
    },
    secondary: {
      main: '#82C9DB',
      contrastText: '#fff',
    },
    tertiary: {
      main: '#C4E6EF',
      contrastText: '#595959'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    red: {
      main: '#FF0000'
    },
    gray: {
      main: '#7F7F7F'
    },
    green: {
      main: 'green',
      contrastText: '#fff',
    },
    orange: {
      main: 'orange',
      contrastText: '#fff',
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Arial',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h4: {
      fontWeight: 'bolder',
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 'bold',
    }
  }
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alert variant="outlined" severity="success">
          Boa sorte com seu novo app :D
        </Alert>
        <img src={logo} height="50" width="50" className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
