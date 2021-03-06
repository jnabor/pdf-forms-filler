import React from 'react'

import Button from '@material-ui/core/Button'
import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  })
)

export interface AuthButtonProps {
  children: any
}

const AuthButton: React.SFC<AuthButtonProps> = ({ children }) => {
  const classes = useStyles(useTheme())

  return (
    <Button
      type='submit'
      fullWidth
      variant='contained'
      color='primary'
      size='large'
      className={classes.submit}>
      {children}
    </Button>
  )
}

export default AuthButton
