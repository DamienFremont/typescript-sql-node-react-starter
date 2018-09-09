import './Home.css';

import * as React from 'react';
import { Button } from 'reactstrap';

import HelloAPI from '../../api/HelloAPI';
import img from './img.svg';

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
                Welcome to My-App
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
            Click me
          </Button>
        </div>

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
