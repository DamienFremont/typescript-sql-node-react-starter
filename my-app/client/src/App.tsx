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
            <Row noGutters className="height-max">
              <Col xs={12} sm="1" md="3" lg="3" xl="2">
                <AppSidebar />
              </Col>
              <Col xs={12} sm="11" md="9" lg="9" xl="10">
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