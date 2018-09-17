import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Breadcrumb, BreadcrumbItem, Button, Collapse, Container } from 'reactstrap';
import ListGroup from 'reactstrap/lib/ListGroup';
import ListGroupItem from 'reactstrap/lib/ListGroupItem';

import FixProblemsHelp from '../components/Help/FixProblemsHelp';
import GetStartedHelp from '../components/Help/GetStartedHelp';

export default class Help extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.toggleGetstarted = this.toggleGetstarted.bind(this);
    this.toggleFixproblems = this.toggleFixproblems.bind(this);
    this.state = this.initState();
  }

  public render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem><a href="/"><FormattedMessage id="breadcrumb.home" /></a></BreadcrumbItem>
          <BreadcrumbItem active><FormattedMessage id="breadcrumb.help" /></BreadcrumbItem>
        </Breadcrumb>
        
        <div className="text-center">
          <div> <FontAwesomeIcon icon={faQuestion} size="lg" />{' '}  </div>
          <h1> <FormattedMessage id="help.title" /></h1>
        </div>
        <Container>
          <ListGroup>

            <ListGroupItem id="getstarted">
              <Button color="link" href="/help#getstarted" onClick={this.toggleGetstarted}>
                <FormattedMessage id="help.getstarted.title" values={{ appname: <FormattedMessage id="app.title" /> }} />
              </Button>
            </ListGroupItem>
            <Collapse isOpen={this.state.open === '#getstarted'}>
              <ListGroupItem>
                <GetStartedHelp />
              </ListGroupItem>
            </Collapse>

            <ListGroupItem id="fixproblems">
              <Button color="link" href="/help#fixproblems" onClick={this.toggleFixproblems}>
                <FormattedMessage id="help.fixproblems.title" />
              </Button>
            </ListGroupItem>
            <Collapse isOpen={this.state.open === '#fixproblems'}>
              <ListGroupItem>
                <FixProblemsHelp />
              </ListGroupItem>
            </Collapse>

          </ListGroup>
        </Container>
      </div>
    );
  }

  private toggleGetstarted() {
    this.setState({
      open: '#getstarted'
    });
  }

  private toggleFixproblems() {
    this.setState({
      open: '#fixproblems'
    });
  }

  private initState(): any {
    if (!this.props.location.hash) {
      return {
        open: '#getstarted'
      };
    }
    return {
      open: this.props.location.hash
    };
  }
}
