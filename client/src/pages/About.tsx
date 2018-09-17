import { faFileContract, faFileSignature, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
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
      <Container>
        <p>
          <FormattedMessage id="about.title" />
        </p>

        <ListGroup>
          <ListGroupItem>
            {logo ?
              <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
              : null}
            <FormattedMessage id="app.title" />
          </ListGroupItem>
          <ListGroupItem>
            <FormattedMessage id="about.version" /> {' '}
            {packageJson.version}
          </ListGroupItem>
          <ListGroupItem>
            <FormattedMessage id="about.gethelp" values={{ name: "My-App" }} />
            <Button color="link" href="/help" >
              <FontAwesomeIcon icon={faShareSquare} fixedWidth />{' '}
            </Button >
          </ListGroupItem>
          <ListGroupItem>
            <FormattedMessage id="about.reportissue" />
            <Button color="link" href="/contact" >
              <FontAwesomeIcon icon={faFileSignature} fixedWidth />{' '}
            </Button>
          </ListGroupItem>
        </ListGroup>

        <div>&nbsp;</div>

        <ListGroup>
          <ListGroupItem>
            <p><FormattedMessage id="app.title" /></p>
            <p><FormattedMessage id="about.copyright" /></p>
            <p><FormattedMessage id="about.terms" />
              <Button color="link" href="/terms" >
                <FontAwesomeIcon icon={faFileContract} fixedWidth />{' '}
              </Button >
            </p>
          </ListGroupItem>
        </ListGroup>

      </Container >
    );
  }
}
