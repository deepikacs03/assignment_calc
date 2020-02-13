import React, { Component } from 'react';
import { Grid, Box } from '@material-ui/core/';
import './Layout.css';
import ResultComponent from '../ResultComponent';
import KeypadComponent from '../KeypadComponent';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    }
  }

  onClick = button => {
    switch (button) {
      case "=":
        return this.calculate();
      case "C":
        return this.reset();
      case "CE":
        return this.backspace();
      default:
        return this.setState({
          result: this.state.result + button
        })
    }
  };

  calculate = () => {
    debugger;
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };
  render() {
    return (
      <Grid container direction="row"
        justify="center"
        alignItems="center"
      >
        <Box >
          <h1 className="font-align">Simple Calculator</h1>
          <ResultComponent result={this.state.result} /> <br />
          <KeypadComponent onClick={this.onClick} />
        </Box>

      </Grid>
    );
  }
}

export default Layout;