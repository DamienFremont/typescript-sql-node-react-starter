import { faFileContract, faFileSignature, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as intl from 'react-intl-universal';
import { Breadcrumb, BreadcrumbItem, Button, ListGroup, ListGroupItem } from 'reactstrap';
import Container from 'reactstrap/lib/Container';

import packageJson from '../../package.json';
import logo from '../logo.svg';

// TODO: move logo
export default class About extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      response: ''
    };
  }

  public render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem><a href="/">{intl.get('breadcrumb.home')}</a></BreadcrumbItem>
          <BreadcrumbItem><a href="/help">{intl.get('breadcrumb.help')}</a></BreadcrumbItem>
          <BreadcrumbItem active>{intl.get('breadcrumb.about')}</BreadcrumbItem>
        </Breadcrumb>

        <Container>
          <p>
            {intl.get('about.title')}
          </p>

          <ListGroup>
            <ListGroupItem>
              {logo ?
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                : null}
              {intl.get('app.title')}
            </ListGroupItem>
            <ListGroupItem>
              {intl.get('about.version')} {' '}
              {packageJson.version}
            </ListGroupItem>
            <ListGroupItem>
              {intl.get('about.gethelp', { appname: intl.get('app.title') })}
              <Button color="link" href="/help" >
                <FontAwesomeIcon icon={faShareSquare} fixedWidth />{' '}
              </Button >
            </ListGroupItem>
            <ListGroupItem>
              {intl.get('about.reportissue')}
              <Button color="link" href="/contact" >
                <FontAwesomeIcon icon={faFileSignature} fixedWidth />{' '}
              </Button>
            </ListGroupItem>
          </ListGroup>

          <div>&nbsp;</div>

          <ListGroup>
            <ListGroupItem>
              <p>{intl.get('app.title')}</p>
              <p>{intl.get('about.copyright', { company: intl.get('app.company') })}</p>
              <p>{intl.get('about.terms')}
                <Button color="link" href="/terms" >
                  <FontAwesomeIcon icon={faFileContract} fixedWidth />{' '}
                </Button >
              </p>
            </ListGroupItem>
          </ListGroup>

        </Container >
      </div >
    );
  }
}
