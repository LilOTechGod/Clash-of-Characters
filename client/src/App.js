import React from 'react'
import './index.css'
import StartMenu from './components/StartMenu/StartMenu';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup';
import Header from './components/Header/index';
import CharacterSelect from './components/CharacterSelect/Characters';
import BattleScreen from './components/BattleScreen/BattleScreen';
import EndMenu from './components/Endmenu/Endmenu';
import { useState } from 'react';


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

  const [fighter, setFighter] = useState('');
  console.log(fighter);
    // 1=Flyeye, 2=Goblin, 3=Mushroom, 4=Skeleton

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
                element={<CharacterSelect selectFighter={setFighter}/>}
              />
              <Route 
                path="/battleScreen" 
                element={<BattleScreen selectedFighter={fighter}/>}
              />
              <Route
              path="/endMenu"
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
