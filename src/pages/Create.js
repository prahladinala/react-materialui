import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function Create() {
  return (
    <div>
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
      <Button type="submit"> Submit </Button>
      <Button type="submit" color="secondary" variant="outlined"> Submit </Button>
      <Button type="submit" color="primary" variant="contained"> Submit </Button>
      <Button type="submit" color="primary" variant="contained" disableElevation> Submit </Button>

      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

    </div>
  )
}

// TYPOGRAPHY - https://material-ui.com/api/typography/
