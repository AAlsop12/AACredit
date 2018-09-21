import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));

import './style/main.scss';

import history from './history';

import Layout from './components/layout';

import Loan from './components/loan';
import Card from './components/card/card';



function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={Card}/>
            <Route path='/card' exact component={Card}/>
            <Route path='/loan' exact component={Loan}/>

          </Switch>
        </Layout>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
