import React, { useContext, useState } from 'react'
import Layout from '../../../app/AppLayout'
import { AppContext } from '../../../context/app-context'
import Router from 'next/router'
import TextField from '@material-ui/core/TextField'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

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
    wrapper: {},
    content: {
      width: '100%' // Fix IE 11 issue.
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
      padding: theme.spacing(1),
      margin: theme.spacing(1)
    },
    header: {
      paddingLeft: theme.spacing(3),
      margin: theme.spacing(0)
    },
    textField: {
      margin: theme.spacing(0),
      padding: theme.spacing(0),
      width: '100%'
    },
    formControl: {
      margin: theme.spacing(3)
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
      console.log(appContext.currentIndex)
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
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <Typography variant='caption'>
                For demo purposes, only the first page of the PDF form is filled
                in without validation.
              </Typography>
              <p>
                <Typography variant='caption'>
                  Creating, updating and saving of information is currently not
                  available.
                </Typography>
              </p>
              <p>
                <Typography variant='caption'>
                  When you press the "Fill In" button, the file will be filled
                  in and generated in the server.
                </Typography>
              </p>
              <p>
                <Typography variant='caption'>
                  The view "Download" button will be enabled when the file is
                  ready for viewing.
                </Typography>
              </p>
            </div>
          </Grid>

          <Grid item xs={8}>
            <div className={classes.paper}>
              <Grid
                container
                direction='row'
                justify='flex-end'
                alignItems='center'>
                <Grid item xs={4}>
                  <Button color='primary' variant='outlined' disabled>
                    Save
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    className={classes.dlButton}
                    color='secondary'
                    variant='contained'
                    endIcon={<GetAppIcon />}
                    href={state.dlLink}
                    disabled={!state.generated}>
                    {' '}
                    Download
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant='contained'
                    color='primary'
                    disabled={state.loading}
                    onClick={() => handleFillClick()}>
                    FILL TO PDF
                  </Button>
                </Grid>
              </Grid>
            </div>
            <div className={classes.wrapper}>
              {state.loading && (
                <CircularProgress
                  size={48}
                  className={classes.buttonProgress}
                />
              )}
            </div>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Designated Referral Partner Organization Name'
                value={data.organization}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.header}>
              <h4>PRINCIPAL DESIGNATED PARTNER CONTACT INFORMATION</h4>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='First Name'
                value={data.partner.firstName}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Middle Name'
                value={data.partner.middleName}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Last Name'
                value={data.partner.lastName}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Telephone Number'
                value={data.partner.phone}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Extension'
                value={data.partner.ext}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Alt Phone Number'
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Extension'
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.paper}>
              {' '}
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Fax Number'
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Email'
                value={data.partner.email}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.header}>
              <h4>ALTERNATIVE DESIGNATED PARTNER CONTACT INFORMATION</h4>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='First Name'
                value={data.alternative.firstName}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Middle Name'
                value={data.alternative.middleName}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Last Name'
                value={data.alternative.lastName}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Telehone Number'
                value={data.alternative.phone}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Extension'
                value={data.alternative.ext}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Alt Telephone Number'
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Extension'
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Fax Number'
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.paper}>
              <TextField
                id='outlined-basic'
                className={classes.textField}
                label='Email'
                value={data.alternative.email}
                margin='normal'
                variant='outlined'
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Auth
