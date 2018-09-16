import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Help from './pages/Help';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends React.Component {

  public render() {
    return (
      <Router>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/help/about" component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
        </MainLayout>
      </Router>
    );
  }
}

export default App;