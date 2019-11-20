import React, { useContext, useState } from 'react'
import Layout from '../../../app/AppLayout'
import { AppContext } from '../../../context/app-context'
import Router from 'next/router'

import GetAppIcon from '@material-ui/icons/GetApp'
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease'
import CircularProgress from '@material-ui/core/CircularProgress'
import {
  Avatar,
  Grid,
  Link,
  Container,
  CssBaseline,
  Paper,
  Typography,
  Button
} from '@material-ui/core'

import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'
import { palette } from '@material-ui/system'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative'
    },
    content: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
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
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  })
)

interface FormState {
  loading: boolean
  generated: boolean
  dlLink: string
}

export interface AuthProps {}

const Auth: React.SFC<AuthProps> = () => {
  const classes = useStyles(useTheme())
  const appContext = useContext(AppContext)

  const [state, setState] = useState<FormState>({
    loading: false,
    generated: false,
    dlLink: ''
  })

  let data = appContext.data[appContext.currentIndex]

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log('submit', e)
  }

  const handleFillClick = () => {
    if (!state.loading) {
      setState({ ...state, loading: true, generated: false })
      appContext.postFillForm(data, res => {
        console.log(res)
        const filename =
          'https://ss-pdfformsfiller.s3-us-west-2.amazonaws.com/' +
          JSON.parse(JSON.parse(res.response).body).filename
        console.log('download', filename)
        setState({
          ...state,
          loading: false,
          generated: true,
          dlLink: filename
        })
      })
    }
  }

  return (
    <Layout title='PDF Forms Filler'>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Auth
