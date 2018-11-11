import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
});

function EnterpriseButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className="SITE-BUTTONS">
        Enterprise
      </Button>
    </div>
  );
}

EnterpriseButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnterpriseButton);