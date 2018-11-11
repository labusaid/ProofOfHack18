import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FloatingActionButtons from '../UploadButton/UploadButton.jsx';
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import ImageAvatars from "../Avatar/Avatar_2.jsx";


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});



class TextFields extends React.Component {
  getRandom() {
    var rand = 1 + Math.random() * (10 - 1);
    rand = rand.toFixed(2);
    var rannumstate = "$" + rand;
  
    return rannumstate;
  }
  constructor(props) {

    super(props);
    this.state = {
      inputtextValue: ''
    };
    this.getRandom = this.getRandom.bind(this);
    }

  updateInputValue(evt) {
    this.setState({
      inputtextValue: evt.target.value
      
    });
  }

  buttonPressed = () => {
    const url = "https://us-central1-proofofhack2018.cloudfunctions.net/writeToIPFS?inputText=";
    this.props.history.push(url + this.state.inputValue);
    console.log("PUSHED")
}

  render() {
    const { classes } = this.props;
  
    return (
      <form className={classes.container} autoComplete="off">
        <ImageAvatars/>
        <TextField
          id="standard-required"
          label="Required"
          defaultValue=""
          className={classes.textField}
          margin="normal"  value={this.state.inputtextValue} onChange={evt => this.updateInputValue(evt)}
          
        />
        <Button variant="outlined" color="primary" className={classes.button}>
        <span>{this.getRandom()}</span>
      </Button>
        <FloatingActionButtons label="Print Files" primary={true} onClick={this.buttonPressed}/>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(TextFields));
