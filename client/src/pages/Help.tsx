import { faHome, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Collapse, Container, ListGroup, ListGroupItem } from 'reactstrap';

import FixProblemsHelp from '../components/help/FixProblemsHelp';
import GetStartedHelp from '../components/help/GetStartedHelp';
import ProductHelp from '../components/help/ProductHelp';

class Help extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.toggleGetstarted = this.toggleGetstarted.bind(this);
    this.toggleFixproblems = this.toggleFixproblems.bind(this);
    this.toggleProduct = this.toggleProduct.bind(this);
    this.state = this.initState();
  }

  public render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem><Link to="/"><FontAwesomeIcon icon={faHome} fixedWidth /></Link></BreadcrumbItem>
          <BreadcrumbItem active>{intl.get('breadcrumb.help')}</BreadcrumbItem>
        </Breadcrumb>

        <div className="mt-5 mb-5 text-center">
          <div> 
            <FontAwesomeIcon icon={faQuestionCircle} size="4x" /> 
          </div>
          <h1> {intl.get('help.title')}</h1>
        </div>
        <Container>
          <ListGroup>

            <ListGroupItem id="getstarted">
              <Button color="link" tag={Link} to="/help#getstarted" onClick={this.toggleGetstarted}>
                {intl.get('help.getstarted.title', { appname: intl.get('app.title') })}
              </Button>
            </ListGroupItem>
            <Collapse isOpen={this.isGetstarted()}>
              <ListGroupItem>
                <GetStartedHelp />
              </ListGroupItem>
            </Collapse>

            <ListGroupItem id="fixproblems">
              <Button color="link" tag={Link} to="/help#fixproblems" onClick={this.toggleFixproblems}>
                {intl.get('help.fixproblems.title')}
              </Button>
            </ListGroupItem>
            <Collapse isOpen={this.isFixproblems()}>
              <ListGroupItem>
                <FixProblemsHelp />
              </ListGroupItem>
            </Collapse>

            <ListGroupItem id="product">
              <Button color="link" tag={Link} to="/help#product" onClick={this.toggleProduct}>
                {intl.get('help.product.title')}
              </Button>
            </ListGroupItem>
            <Collapse isOpen={this.isProduct()}>
              <ListGroupItem>
                <ProductHelp />
              </ListGroupItem>
            </Collapse>

          </ListGroup>
        </Container>
      </div>
    );
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

  private isGetstarted() {
    return this.state.open === '#getstarted';
  }

  private isFixproblems() {
    return this.state.open === '#fixproblems';
  }

  private isProduct() {
    return this.state.open === '#product';
  }

  private toggleGetstarted() {
    this.setState({
      open: (this.isGetstarted() ? undefined : '#getstarted')
    });
  }

  private toggleFixproblems() {
    this.setState({
      open: (this.isFixproblems() ? undefined : '#fixproblems')
    });
  }

  private toggleProduct() {
    this.setState({
      open: (this.isProduct() ? undefined : '#product')
    });
  }
}
export default Help;