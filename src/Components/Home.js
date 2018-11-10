import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Styles from '../Styles/Home.css';
class Home extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
        key: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
   //this.setState({ togglePaymentIntput: !this.state.togglePaymentIntput });
  }

  handleChange() {

  }

  render() {
    return (
      <div className="home-outer-wrapper">
        <TextField
          id="outlined-name"
          label="Encryption Key"
          className="change"
          value={this.state.key}
          onChange={this.handleChange()}
          margin="normal"
          variant="outlined"
        />
        <div className="home-button-wrapper"> 
            <Button variant="contained" color="primary" >
                Primary
            </Button>
        </div>
      </div>
    );
  }
}

export default Home;
