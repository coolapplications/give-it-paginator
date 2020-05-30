import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MyGifts from './components/Pages/MyGifts';
import Home from './components/Pages/Home';
import store from './store';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

// A function that routes the user to the right place
// after login

const Root = (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/gifts' component={MyGifts} />

        <Route exact path='/' component={Home} />
      </Switch>
    </HashRouter>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
