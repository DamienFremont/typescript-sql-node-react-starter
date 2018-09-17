import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
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
          <BreadcrumbItem><a href="/">{intl.get('breadcrumb.home')}</a></BreadcrumbItem>
          <BreadcrumbItem active>{intl.get('breadcrumb.help')}</BreadcrumbItem>
        </Breadcrumb>
        
        <div className="mt-5 mb-5 text-center">
          <div> <FontAwesomeIcon icon={faQuestionCircle} size="4x" />{' '}  </div>
          <h1> {intl.get('help.title')}</h1>
        </div>
        <Container>
          <ListGroup>

            <ListGroupItem id="getstarted">
              <Button color="link" href="/help#getstarted" onClick={this.toggleGetstarted}>
                {intl.get('help.getstarted.title', { appname: intl.get('app.title') })}
              </Button>
            </ListGroupItem>
            <Collapse isOpen={this.state.open === '#getstarted'}>
              <ListGroupItem>
                <GetStartedHelp />
              </ListGroupItem>
            </Collapse>

            <ListGroupItem id="fixproblems">
              <Button color="link" href="/help#fixproblems" onClick={this.toggleFixproblems}>
                {intl.get('help.fixproblems.title')}
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
