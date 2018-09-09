import './Home.css';

import { Grid, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import * as React from 'react';

import HelloAPI from '../api/HelloAPI';
import HomeState from './HomeState';
import logo from './logo.svg';

class Home extends React.Component<any, HomeState> {

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

        <Paper className="home-featured">
          <Grid container={true}>
            <Grid item={true} md={12} style={ {textAlign: "center"} }>
              <img src={logo} className="Home-logo" alt="logo" />
            </Grid>
            <Grid item={true} md={12}>
              <Typography variant="display3" align="center" color="inherit">
                Welcome to React
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Paper style={ {textAlign: "center"} }>
          <Typography variant="subheading">
            {this.state.response}
          </Typography>
        </Paper>
  
        <Grid container={true} spacing={24} style={ {textAlign: "center"} }>
          <Grid item={true} xs={12}>
            <Button variant="contained" color="primary" onClick={this.handleClick}>
              <DoneIcon /> Button
            </Button>
          </Grid>
        </Grid>

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

export default Home;
