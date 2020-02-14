import React from 'react';
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AlertState } from './context/alert/alertState';
import { GithubState } from './context/github/githubState';

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: `text alert` }} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
