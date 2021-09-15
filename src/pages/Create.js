import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendIcon from '@material-ui/icons/Send';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new notes
      </Typography>

      <Button
        onClick={() => console.log('You Clicked me')}
        type="submit"
        color="secondary"
        variant="contained" >
        Submit
      </Button>

      {/* ICONS */}
      <br />
      <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="secondary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="small" />
      <AcUnitOutlinedIcon color="error" fontSize="small" />
      <AcUnitOutlinedIcon color="disabled" fontSize="small" />

      <br />
      <Button
        onClick={() => console.log('You Clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        startIcon={<SendIcon />}
        endIcon={<ArrowForwardIosIcon />}
      >
        Submit
      </Button>
      <br />
      <Button
        onClick={() => console.log('You Clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        startIcon={<SendIcon />}
      >
        Submit
      </Button>
      <br />
      <Button
        onClick={() => console.log('You Clicked me')}
        type="submit"
        color="secondary"
        variant="contained"
        endIcon={<ArrowForwardIosIcon />}
      >
        Submit
      </Button>

    </Container>
  )
}

// TYPOGRAPHY - https://material-ui.com/api/typography/
