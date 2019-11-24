import React, { useContext, useState, useEffect } from 'react'
import Layout from '../../../app/AppLayout'
import { AppContext } from '../../../context/app-context'
import Router, { useRouter } from 'next/router'

import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import Hints from './Hints'
import Menu from './Menu'
import Contact from './Contact'

import {
  Container,
  CssBaseline,
  Grid,
  Typography,
  Button
} from '@material-ui/core'

import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    wrapper: {},
    content: {
      width: '100%' // Fix IE 11 issue.
    },
    textField: {
      margin: theme.spacing(0),
      padding: theme.spacing(0),
      width: '100%'
    },
    paper: {
      padding: theme.spacing(1),
      margin: theme.spacing(1)
    }
  })
)

export interface AuthProps {}

const Auth: React.SFC<AuthProps> = () => {
  const classes = useStyles(useTheme())
  const appContext = useContext(AppContext)

  const router = useRouter()
  const { fid } = router.query

  const [loading, setLoading] = useState<boolean>(false)
  const [generated, setGenerated] = useState<boolean>(false)
  const [link, setLink] = useState<string>('')
  const [data, setData] = useState<any>({})

  useEffect(() => {
    const data = appContext.data.find(d => d.id === fid)
    setData(data)
  })

  console.log()
  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log('submit', e)
  }

  const handleFillClick = () => {
    if (!loading) {
      setLoading(true)
      setGenerated(false)

      console.log('posting to api...', data)
      appContext.postFillForm(data, res => {
        console.log(res)
        const filename =
          'https://ss-pdfformsfiller.s3-us-west-2.amazonaws.com/' +
          JSON.parse(JSON.parse(res.response).body).filename
        console.log('download', filename)
        setLoading(false)
        setGenerated(true)
        setLink(filename)
      })
    }
  }

  return (
    <Layout title='PDF Forms Filler'>
      <CssBaseline />
      <Container maxWidth='xl'>
        <Hints />
        <Menu
          loading={loading}
          generated={generated}
          link={link}
          handleFillClick={handleFillClick}
        />
        <Grid item xs={12}>
          <div className={classes.paper}>
            <TextField
              id='outlined-basic'
              className={classes.textField}
              label='Designated Referral Partner Organization Name'
              value={data ? data.organization : ''}
              margin='normal'
              variant='outlined'
            />
          </div>
        </Grid>
        {data && (
          <Contact
            title='PRINCIPAL DESIGNATED PARTNER CONTACT INFORMATION'
            data={data.partner}
          />
        )}
        {data && (
          <Contact
            title='ALTERNATE DESIGNATED PARTNER CONTACT INFORMATION'
            data={data.alternative}
          />
        )}
      </Container>
    </Layout>
  )
}

export default Auth
