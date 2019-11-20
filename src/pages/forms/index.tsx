import React, { useContext } from 'react'
import Router from 'next/router'
import Layout from '../../app/AppLayout'
import { Toolbar, AppBar, IconButton, Button } from '@material-ui/core'
import { AppContext } from '../../context/app-context'

import CssBaseline from '@material-ui/core/CssBaseline'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import EditIcon from '@material-ui/icons/Edit'

import {
  useTheme,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles'

export interface FormsProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: '100%',
      overflowX: 'auto',
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    table: {
      minWidth: 600
    }
  })
)

function createData(
  id: string,
  firstName: string,
  middleName: string,
  lastName: string,
  phone: string,
  email: string
) {
  return { id, firstName, middleName, lastName, phone, email }
}

const Forms: React.SFC<FormsProps> = () => {
  const classes = useStyles(useTheme())

  const appContext = useContext(AppContext)

  const rows = appContext.data.map(rec =>
    createData(
      rec.id,
      rec.partner.firstName,
      rec.partner.middleName,
      rec.partner.lastName,
      rec.partner.phone,
      rec.partner.email
    )
  )

  const handleClick = (event: any, index: number) => {
    appContext.currentIndex = index
    Router.push('/forms/EDSC-EMP5624-2019-10-001-E')
  }

  return (
    <Layout title='PDF Forms Filler'>
      <CssBaseline />
      <Container>
        <div className={classes.paper}>
          <Paper className={classes.paper}>
            <Toolbar>
              <Typography variant='h5'>Mock Database</Typography>
            </Toolbar>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align='right'>Fist Name</TableCell>
                  <TableCell align='right'>Middle Name</TableCell>
                  <TableCell align='right'>Last Name</TableCell>
                  <TableCell align='right'>Phone</TableCell>
                  <TableCell align='right'>Email</TableCell>
                  <TableCell align='right'>View</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow hover key={row.id}>
                    <TableCell component='th' scope='row'>
                      {row.id}
                    </TableCell>
                    <TableCell align='right'>{row.firstName}</TableCell>
                    <TableCell align='right'>{row.middleName}</TableCell>
                    <TableCell align='right'>{row.lastName}</TableCell>
                    <TableCell align='right'>{row.phone}</TableCell>
                    <TableCell align='right'>{row.email}</TableCell>
                    <TableCell align='right'>
                      <IconButton
                        edge='start'
                        onClick={() => handleClick(event, index)}
                        aria-label='home'>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
          <p>
            This is a mock database to show existing information that can be
            used ot fill out the PDF form. Click on any of the edit icons to
            update and fill the PDF document.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default Forms
