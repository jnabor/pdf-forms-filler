import React from 'react'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      padding: theme.spacing(2),
      marginTop: 'auto',
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.grey[300]
    }
  })
)

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
  const classes = useStyles(useTheme())
  return (
    <footer className={classes.footer}>
      <Container maxWidth='sm'>
        <Typography
          color='inherit'
          variant='caption'
          display='block'
          align='center'>
          {'Jayson Nabor™ '}
          <Link
            color='inherit'
            href='https://github.com/sonabstudios/pdf-forms-filler/'>
            PDF Form Filler™
          </Link>{' '}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer
