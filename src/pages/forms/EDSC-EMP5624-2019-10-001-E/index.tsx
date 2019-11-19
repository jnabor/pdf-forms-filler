import React, { useContext, useState } from 'react'
import Layout from '../../../app/AppLayout'

import { Button } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'

import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    }
  })
)

interface FormState {
  processing: boolean
}

export interface AuthProps {}

const Auth: React.SFC<AuthProps> = () => {
  const classes = useStyles(useTheme())
  const [state, setState] = useState<FormState>({
    processing: false
  })

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log('submit', e)
  }

  const genDoc = () => {
    console.log('generating..')
  }

  return (
    <Layout title='PDF Forms Filler'>
      <Button variant='outlined' disabled>
        Save
      </Button>
      <Button
        variant='outlined'
        component='span'
        color='primary'
        endIcon={<GetAppIcon />}
        onClick={() => {
          genDoc()
        }}>
        Download PDF
      </Button>
    </Layout>
  )
}

export default Auth
