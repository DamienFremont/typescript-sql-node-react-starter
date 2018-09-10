import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';

import AppFooter from './components/app/AppFooter';
import AppNavbar from './components/app/AppNavbar';
import AppSidebar from './components/app/AppSidebar';
import Home from './components/home/Home';

class App extends React.Component {

  public render() {
    return (
      <React.Fragment>
        <header>
          <AppNavbar />
        </header>
        <main>
          <Container fluid className="no-gutters">
            <Row noGutters>
              <Col xs={2} sm="1" md="1" lg="3" xl="2">
                <AppSidebar className="sidebar-sticky" />
              </Col>
              <Col xs={10} sm="11" md="11" lg="9" xl="10">
                <Home />
                {this.renderMainFooter()}
              </Col>
            </Row>
          </Container>
        </main>
        <footer>
          <AppFooter />
        </footer>
      </React.Fragment>
    );
  }

  // FIXME: This worked for chrome 64 without setting a hard-coded height 
  private renderMainFooter() {
    return (
      <p style={{ marginBottom: "60px" }}>{' '}</p>
    );
  }

}

export default App;