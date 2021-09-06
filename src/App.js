import './App.css';
import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import theme from './theme';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
// import Header from './components/Header';
function App() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, []);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route exact path="/" component={MainPage}/>
      </ThemeProvider>
    </Router>
  );
}

export default hot(module)(App);
