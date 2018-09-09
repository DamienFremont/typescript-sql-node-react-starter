import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import { Col, Row } from 'reactstrap';

import AppNavbar from './components/AppNavbar';
import AppToolbar from './components/AppToolbar';
import Home from './components/Home';


class App extends React.Component {

  public render() {
    return (
      <React.Fragment>
        <Row>
          <Col>
            <AppToolbar />
          </Col>
        </Row>
        <Row>
          <Col xs="3">
            <AppNavbar />
          </Col>
          <Col xs="9">
            <main>
              <Home />
            </main>
          </Col>
        </Row>
      </React.Fragment>
    );
  }

}

export default App;