import * as React from 'react';
import './App.css';
import AppState from './AppState';
import logo from './logo.svg';

class App extends React.Component<any, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      response: ''
    };
  }
  
  public componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => this.setState({ response: "error" }));
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }

  private callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

}

export default App;
