import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import { Col, Container, Row } from 'reactstrap';

import AppFooter from '../components/app/AppFooter';
import AppNavbar from '../components/app/AppNavbar';
import AppSidebar from '../components/app/AppSidebar';

export default class MainLayout extends React.Component {

  public render() {
    return (
      <div>
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
                {this.props.children}
                <p style={{ marginBottom: "60px" }}>{' '}</p>
              </Col>
            </Row>
          </Container>
        </main>
        <footer>
          <AppFooter />
        </footer>
      </div>
    );
  }

}
