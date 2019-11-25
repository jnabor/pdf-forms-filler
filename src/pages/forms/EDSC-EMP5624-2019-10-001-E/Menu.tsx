import React, { MouseEvent } from 'react'
import Router, { useRouter } from 'next/router'

import { Grid, Typography, Button } from '@material-ui/core'

import GetAppIcon from '@material-ui/icons/GetApp'
import CircularProgress from '@material-ui/core/CircularProgress'

import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'
import { createGenerateId } from 'jss'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {},
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(1)
    },
    dlButton: {
      color: theme.palette.grey[200]
    },
    buttonProgress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12
    }
  })
)
export interface HintsProps {
  loading: boolean
  generated: boolean
  link: string
  handleFillClick(event: MouseEvent<HTMLButtonElement>): void
}

const Hints: React.SFC<HintsProps> = ({
  loading,
  generated,
  link,
  handleFillClick
}) => {
  const classes = useStyles(useTheme())
  return (
    <Grid item xs={12}>
      <div className={classes.paper}>
        <Grid container direction='row' justify='flex-end' alignItems='center'>
          <Grid item xs={3}>
            <Button
              color='primary'
              variant='outlined'
              onClick={() => Router.push('/forms')}>
              List
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button color='primary' variant='outlined' disabled>
              Save
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              className={classes.dlButton}
              color='secondary'
              variant='contained'
              endIcon={<GetAppIcon />}
              href={link}
              disabled={!generated}>
              {' '}
              Download
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant='contained'
              color='primary'
              disabled={loading}
              onClick={handleFillClick}>
              FILL TO PDF
            </Button>
          </Grid>
        </Grid>
      </div>
      <div className={classes.wrapper}>
        {loading && (
          <CircularProgress size={48} className={classes.buttonProgress} />
        )}
      </div>
    </Grid>
  )
}

export default Hints
