import React from 'react'
import './index.css'
import { StartMenu } from './components/StartMenu/StartMenu.js';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Header from './components/Header/index';
import CharacterSelect from './components/CharacterSelect/Characters';
import BattleScreen from './components/BattleScreen/BattleScreen';
import EndMenu from './components/Endmenu/Endmenu';
import { useEffect, useState } from 'react';


import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          <div className="">
            <Routes>
              <Route 
                path="/"
                element={<Header/>}
              />
              <Route 
                path="/start"
                element={<StartMenu />}
              />
              <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route
                path="/characterSelect"
                element={<CharacterSelect />}
              />
              <Route 
                path="/battleScreen" 
                element={<BattleScreen />}

              />
              <Route
              path="endMenu"
              element={<EndMenu />}
              />
            </Routes>
          </div>
        
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
