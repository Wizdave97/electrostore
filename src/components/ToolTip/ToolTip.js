import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Tooltip, List, ListItem, Button } from '@material-ui/core';


function arrowGenerator(color) {
  return {
    pointerEvents:'all',
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`,
      },
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: '-0.95em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: `${color} transparent transparent transparent`,
      },
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: `transparent ${color} transparent transparent`,
      },
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: '-0.95em',
      height: '3em',
      width: '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: `transparent transparent transparent ${color}`,
      },
    },
  };
}
const styles = theme => ({
  list:{
    cursor:'pointer',
  },
  arrow: {
    position: 'absolute',
    fontSize: 6,
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },

  htmlPopper: arrowGenerator('#dadde9'),
  htmlTooltip: {
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
    '& b': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
});


const toolTip = props => {
  const { classes } = props;
  return(
    <Tooltip
        classes={{
          popper: classes.htmlPopper,
          tooltip: classes.htmlTooltip,
        }}
        onClose={props.handleTooltipClose}
        open={props.open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        PopperProps={{
          disablePortal: true,
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(props.arrowRef),
                element: props.arrowRef,
              },
            },
          },
        }}
        title={
          <Fragment>
            <List className={classes.list}>
              <ListItem onClick={props.handleTooltipClose}>
                <Button component={Link} size='medium' fullWidth to='/profile' variant='outlined' color='primary'>My Profile</Button>
              </ListItem>
              <ListItem onClick={props.handleTooltipClose}>
                <Button component={Link} size='medium' fullWidth to='/' variant='outlined' color='primary'>Logout</Button>
              </ListItem>
            </List>
            <span className={classes.arrow} ref={props.handleArrowRef} />
          </Fragment>
        }
      >
        {props.children}
      </Tooltip>
  )
}

export default withStyles(styles)(toolTip);
