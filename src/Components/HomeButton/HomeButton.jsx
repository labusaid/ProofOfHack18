import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
  },
});

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function HomeButton(props) {
  const { classes } = props;
  return (
    <div className={classes.root}  className="has-text-left is-fixed-top">
      <Button variant="outlined" className="home-button">
        Home
      </Button>
    </div>
  );
}

HomeButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeButton);