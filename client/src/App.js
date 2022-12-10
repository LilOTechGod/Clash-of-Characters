import React from 'react'
import './index.css'
import { StartMenu } from './components/StartMenu/StartMenu.js';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Header from './components/Header/index';
import CharacterSelect from './components/CharacterSelect/Characters';
import BattleScreen from './components/BattleScreen/BattleScreen';
import EndMenu from './components/Endmenu/Endmenu';


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

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
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











//  ---------- WHAT WAS ALREADY THERE ----------

  // const App = () => {
  // // const [winner, setWinner] = useState();
  // const [mode, setMode] = useState('start');

  // useEffect(() => {
  //   if (mode === 'battle') {
  //     setWinner(undefined);
  //   }
  // }, [mode]);

//   return (
//     <div className={styles.main}>
//       {mode === 'start' && (
//         <StartMenu onStartClick={() => setMode('battle')} />
//       )}

//       {mode === 'battle' && <>Battle Mode </> }

//       {mode === 'gameOver' && <>Game Over </> }

//     </div>
//   );
// };

export default App;
