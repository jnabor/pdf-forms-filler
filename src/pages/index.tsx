import React, { Component } from 'react'
import Router from 'next/router'
import Layout from '../app/HomeLayout'

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
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import AuthButton from '../components/auth/AuthButton'
import AuthEmailField from '../components/auth/AuthEmailField'
import AuthPasswordField from '../components/auth/AuthPasswordField'

import {
  useTheme,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh'
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: theme.palette.grey[50],
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    paper: {
      margin: theme.spacing(2),
      marginBottom: theme.spacing(12),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignSelf: 'center'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      height: '100%',
      margin: theme.spacing(3, 0, 2)
    },
    demo: {
      marginTop: theme.spacing(1),
      color: theme.palette.grey[200]
    },
    avatar: {
      margin: 10,
      width: 60,
      height: 60
    }
  })
)

export interface IndexPageProps {}

const IndexPage: React.SFC<IndexPageProps> = () => {
  const classes = useStyles(useTheme())

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log('submit', e)
  }

  return (
    <div>
      <Grid container component='main' className={classes.root}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Layout title='PDF Forms Filler'>
            <CssBaseline />
            <Container maxWidth='xs'>
              <div className={classes.paper}>
                <Avatar
                  variant='square'
                  alt='PFF'
                  src='/static/icon.png'
                  className={classes.avatar}
                />
                <Typography variant='h5' gutterBottom>
                  PDF Forms Filler™
                </Typography>
                <Typography variant='caption' gutterBottom>
                  Create and update your forms data in database.
                </Typography>
                <Typography variant='caption' gutterBottom>
                  Automate filling out PDF forms.
                </Typography>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  size='large'
                  color='secondary'
                  endIcon={<ArrowForwardIcon />}
                  onClick={() =>
                    Router.push('/forms/EDSC-EMP5624-2019-10-001-E')
                  }
                  className={classes.demo}>
                  Try Demo
                </Button>
                <form
                  className={classes.form}
                  onSubmit={e => submitHandler(e)}
                  noValidate>
                  <AuthEmailField />
                  <AuthPasswordField />
                  <AuthButton>Sign In</AuthButton>
                  <Grid container>
                    <Grid item xs>
                      <Link
                        onClick={() => Router.push('/auth/reset')}
                        variant='body2'>
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link
                        onClick={() => Router.push('/auth/signup')}
                        variant='body2'>
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </div>
            </Container>
          </Layout>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
      </Grid>
    </div>
  )
}

export default IndexPage
