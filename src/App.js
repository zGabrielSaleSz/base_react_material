import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Login from './components/pages/credentials/Login';
import Development from './components/pages/Development';
import Homepage from './components/pages/Homepage';
import Application from './components/pages/application/Application';
import NotFound from './components/pages/NotFound';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(193, 33, 39)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F8861A',
      contrastText: '#fff',
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
    <ThemeProvider theme= { theme } >
       <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/dev">
            <Development />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/panel">
            <Application />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>  
  );
}

export default App;
