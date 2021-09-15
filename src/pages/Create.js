import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  // CLASSES/ OBJECTS AND RULES
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      // SUDO EFFECT HOVER STATE
      backgroundColor: 'blue',
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }
})
export default function Create() {
  const classes = useStyles()
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new notes
      </Typography>

      <Button
        className={classes.btn}
        onClick={() => console.log('You Clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<SendIcon />}
      >
        Submit
      </Button>


    </Container>
  )
}

// TYPOGRAPHY - https://material-ui.com/api/typography/
