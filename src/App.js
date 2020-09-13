import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";

import Login from './pages/login';
import Main from './pages/main';
import Home from './pages/home';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './redux/reducers'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {

  let isAuth = (component) => {
    let auth = localStorage.getItem('app-auth');
    auth = true; //temp
    return auth ? component : <Login />;
  }

  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <Grid container>
          <Switch>            

            <Route path='/login'>
              <Login />
            </Route>

            <Route exact path='/'>
              {isAuth(<Main />)}
            </Route>

            <Route exact path='/main'>
              {isAuth(<Main />)}
            </Route>            

            <Route path='/main/:pageTab'>
              {isAuth(<Main />)} 
            </Route>

            <Route exact path='/home'>
              {isAuth(<Home />)} 
            </Route>

          </Switch>
        </Grid>
      </Router>
    </Provider>

  );
}

export default App;
