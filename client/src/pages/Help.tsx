import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Collapse, Container } from 'reactstrap';
import ListGroup from 'reactstrap/lib/ListGroup';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';

import HomeHelp from '../components/Help/HomeHelp';

export default class Help extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.toggleHome = this.toggleHome.bind(this);
    this.state = { isOpenHome: this.props.location.hash === '#home' };
  }

  public render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <div> <FontAwesomeIcon icon={faQuestion} size="lg" />{' '}  </div>
          <h1> <FormattedMessage id="help.title" /></h1>
        </div>
        <Container>
          <ListGroup>
            <ListGroupItem id="home">
              <Button color="link" href="/help#home" onClick={this.toggleHome}>
                <FormattedMessage id="help.home.title" />
              </Button>
            </ListGroupItem>
            <Collapse isOpen={this.state.isOpenHome}>
              <ListGroupItem>
                <HomeHelp />
              </ListGroupItem>
            </Collapse>
          </ListGroup>
        </Container>
      </div>
    );
  }

  private toggleHome() {
    this.setState({ isOpenHome: !this.state.isOpenHome });
  }
}
