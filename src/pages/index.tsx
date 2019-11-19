import React, { Component } from 'react'
import Router from 'next/router'
import Head from 'next/head'
import Layout from '../app/HomeLayout'
import AuthLayout from '../components/auth/AuthLayout'
import {
  Grid,
  Link,
  Container,
  CssBaseline,
  Paper,
  Typography
} from '@material-ui/core'

import AuthButton from '../components/auth/AuthButton'
import AuthEmailField from '../components/auth/AuthEmailField'
import AuthPasswordField from '../components/auth/AuthPasswordField'
import Footer from '../app/AppFooter'

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
      <Head>
        <title>PDF Forms Filler</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Grid container component='main' className={classes.root}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Layout title='Molotov Home'>
            <CssBaseline />
            <Container maxWidth='xs'>
              <div className={classes.paper}>
                <Typography variant='h5' gutterBottom>
                  PDF Form Filler™
                </Typography>
                <Typography variant='caption' gutterBottom>
                  Create and update your forms data in database.
                </Typography>
                <Typography variant='caption' gutterBottom>
                  Automate filling out PDF forms.
                </Typography>
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
