import React from 'react'
import Head from 'next/head'

import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core'
import { blue, green } from '@material-ui/core/colors'

import NoSsr from '@material-ui/core/NoSsr'

const defaultTheme = {
  palette: {
    primary: {
      light: '#5ea3ff',
      main: '#0675ce',
      dark: '#004a9c',
      contrastText: '#fff'
    },
    secondary: {
      light: '#77818e',
      main: '#4b5561',
      dark: '#232c37',
      contrastText: '#000'
    }
  },
  status: {
    danger: 'orange'
  }
}

const theme = createMuiTheme(defaultTheme)

export interface ThemerProps {
  children: any
}

const Themer: React.SFC<ThemerProps> = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel='shortcut icon' href='/static/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto&display=swap'
          rel='stylesheet'></link>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Head>
      <style jsx global>{`
        body {
          background: ${theme.palette.background.paper};
          font-family: ${theme.typography.fontFamily};
          color: ${theme.palette.primary.main};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <NoSsr>{children}</NoSsr>
      </ThemeProvider>
    </div>
  )
}

export default Themer
