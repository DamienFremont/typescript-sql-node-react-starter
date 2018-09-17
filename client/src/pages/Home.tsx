import './Home.css';

import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from 'reactstrap';

import HelloAPI from '../api/HelloAPI';
import img from './Home-img.svg';

interface IHomeState {
  response: string;
}

export default class Home extends React.Component<any, IHomeState> {

  constructor(props: any) {
    super(props);
    this.state = {
      response: ''
    };
  }

  public componentDidMount() {
    HelloAPI.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => this.setState({ response: "error" }));
  }

  public render() {
    return (
      <div>

        <div className="jumbotron text-center">
            <div>
              <img src={img} className="Home-logo" alt="logo" />
            </div>
            <div>
              <h1>
                <FormattedMessage id="home.welcome" values={{ appname: <FormattedMessage id="app.title" />}}/>
              </h1>
            </div>
        </div>

        <div className="text-center">
          <p className="text-success">
            {this.state.response}
          </p>
        </div>

        <div className="text-center">
          <Button color="primary" onClick={this.handleClick}>
            <FormattedMessage id="home.button" />
          </Button>
        </div>
        <Button color="link" href="/help#getstarted">
          <FontAwesomeIcon icon={faQuestionCircle} />
        </Button>
      </div>
    );
  }

  private handleClick = () => {
    const response = this.state.response;
    this.setState({
      response: response + " ...clicked!"
    });
  };
}
