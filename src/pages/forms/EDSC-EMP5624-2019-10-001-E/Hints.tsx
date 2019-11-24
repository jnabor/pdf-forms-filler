import React from 'react'

import { Grid, Typography, Button } from '@material-ui/core'

import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(1)
    }
  })
)
export interface HintsProps {}

const Hints: React.SFC<HintsProps> = () => {
  const classes = useStyles(useTheme())
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.paper}>
          <Typography variant='caption'>
            For demo purposes, only the first page of the PDF form is filled in
            without validation.
          </Typography>
          <p>
            <Typography variant='caption'>
              Creating, updating and saving of information is currently not
              available.
            </Typography>
          </p>
          <p>
            <Typography variant='caption'>
              When you press the "Fill In" button, the file will be filled in
              and generated in the server.
            </Typography>
          </p>
          <p>
            <Typography variant='caption'>
              The view "Download" button will be enabled when the file is ready
              for viewing.
            </Typography>
          </p>
        </div>
      </Grid>
    </Grid>
  )
}

export default Hints
