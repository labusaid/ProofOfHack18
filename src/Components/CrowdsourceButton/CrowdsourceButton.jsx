import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function CrowdsourceButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className="SITE-BUTTONS" style={{ textDecoration: 'none'}}>
        Crowdsource
      </Button>
    </div>
  );
}

CrowdsourceButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CrowdsourceButton);