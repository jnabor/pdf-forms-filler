import React from 'react'

import TextField from '@material-ui/core/TextField'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

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
    },
    textField: {
      margin: theme.spacing(0),
      padding: theme.spacing(0),
      width: '100%'
    },
    formControl: {
      margin: theme.spacing(3)
    },
    header: {
      paddingLeft: theme.spacing(3),
      margin: theme.spacing(0)
    }
  })
)
export interface HintsProps {
  title: string
  data: any
}

const Hints: React.SFC<HintsProps> = ({ title, data }) => {
  const classes = useStyles(useTheme())
  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.header}>
          <h4>{title}</h4>
        </div>
      </Grid>

      <Grid item xs={4}>
        <div className={classes.paper}>
          <TextField
            id='outlined-basic'
            className={classes.textField}
            label='First Name'
            value={data.firstName}
            margin='normal'
            variant='outlined'
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.paper}>
          <TextField
            id='outlined-basic'
            className={classes.textField}
            label='Middle Name'
            value={data.middleName}
            margin='normal'
            variant='outlined'
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.paper}>
          <TextField
            id='outlined-basic'
            className={classes.textField}
            label='Last Name'
            value={data.lastName}
            margin='normal'
            variant='outlined'
          />
        </div>
      </Grid>

      <Grid item xs={3}>
        <div className={classes.paper}>
          <TextField
            id='outlined-basic'
            className={classes.textField}
            label='Telephone Number'
            value={data.phone}
            margin='normal'
            variant='outlined'
          />
        </div>
      </Grid>
      <Grid item xs={2}>
        <div className={classes.paper}>
          <TextField
            id='outlined-basic'
            className={classes.textField}
            label='Extension'
            value={data.ext}
            margin='normal'
            variant='outlined'
          />
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className={classes.paper}>
          <TextField
            id='outlined-basic'
            className={classes.textField}
            label='Alt Phone Number'
            margin='normal'
            variant='outlined'
          />
        </div>
      </Grid>
      <Grid item xs={2}>
        <div className={classes.paper}>
          <TextField
            id='outlined-basic'
            className={classes.textField}
            label='Extension'
            margin='normal'
            variant='outlined'
          />
        </div>
      </Grid>
      <Grid item xs={2}>
        <div className={classes.paper}>
          {' '}
          <TextField
            id='outlined-basic'
            className={classes.textField}
            label='Fax Number'
            margin='normal'
            variant='outlined'
          />
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.paper}>
          <TextField
            id='outlined-basic'
            className={classes.textField}
            label='Email'
            value={data.email}
            margin='normal'
            variant='outlined'
          />
        </div>
      </Grid>
    </Grid>
  )
}

export default Hints
