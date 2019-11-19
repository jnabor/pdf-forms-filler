import React from 'react'
import Head from 'next/head'

import Themer from './AppThemer'
import Footer from './AppFooter'
import Header from './AppHeader'

import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
    main: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center'
    }
  })
)

export interface LayoutProps {
  title: string
  children: any
}

const Layout: React.SFC<LayoutProps> = ({ title, children }) => {
  const classes = useStyles(useTheme())
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Themer>
        <div className={classes.root}>
          <Container className={classes.main}>{children}</Container>
          <Footer />
        </div>
      </Themer>
    </div>
  )
}

export default Layout
