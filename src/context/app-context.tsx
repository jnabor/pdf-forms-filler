import React, { useState } from 'react'
import {
  CompareArrowsOutlined,
  SettingsRemoteRounded
} from '@material-ui/icons'

const apiUrl =
  'https://0drmo8s2x3.execute-api.us-west-2.amazonaws.com/dev/pdfform'

let data1 = {
  id: '8901201908482221234',
  organization: 'Football Association of America',
  partner: {
    firstName: 'Sabrina',
    middleName: 'Yoshida',
    lastName: 'Rodriques',
    phone: '+1 419 486 2104',
    ext: '056',
    email: 'SabrinaLRodriques@dayrep.com',
    oralEnglish: false,
    oralFrench: true,
    writtenEnglish: false,
    writtenFrench: true
  },
  alternative: {
    firstName: 'Chris',
    middleName: 'Castro',
    lastName: 'Holley',
    phone: '+1 903 372 9902',
    ext: '000',
    email: 'ChrisEHolley@rhyta.com',
    oralEnglish: true,
    oralFrench: false,
    writtenEnglish: true,
    writtenFrench: false
  }
}

let data2 = {
  id: '1233461908482221234',
  organization: 'International Boxing Federation',
  partner: {
    firstName: 'Jean',
    middleName: 'Snyder',
    lastName: 'Penaflor',
    phone: '+1 651 316 4424',
    ext: '056',
    email: 'JeanSPenaflor@dayrep.com',
    oralEnglish: false,
    oralFrench: true,
    writtenEnglish: true,
    writtenFrench: false
  },
  alternative: {
    firstName: 'Miguel',
    middleName: 'Gomes',
    lastName: 'Rocha',
    phone: '+1 304 258 3817',
    ext: '023',
    email: 'MiguelGomesRocha@rhyta.com',
    oralEnglish: true,
    oralFrench: false,
    writtenEnglish: true,
    writtenFrench: false
  }
}

let data3 = {
  id: '5671232019048521234',
  organization: 'World Health Organization',
  partner: {
    firstName: 'Brett',
    middleName: 'Saad',
    lastName: 'Reinhardt',
    phone: '+1 419 486 2104',
    ext: '056',
    email: 'BrettCReinhardt@dayrep.com',
    oralEnglish: false,
    oralFrench: true,
    writtenEnglish: false,
    writtenFrench: true
  },
  alternative: {
    firstName: 'Kevin',
    middleName: 'Savage',
    lastName: 'Garcia',
    phone: '+1 903 372 9902',
    ext: '000',
    email: 'ChrisEHolley@rhyta.com',
    oralEnglish: true,
    oralFrench: false,
    writtenEnglish: false,
    writtenFrench: true
  }
}

let db = [data1, data2, data3]

export interface PersonInfo {
  firstName: string
  fiddleName: string
  lastName: string
  phone: string
  extension: string
  email: string
  oralEnglish: boolean
  oralFrench: boolean
  writtenEnglish: boolean
  writtenFrench: boolean
}

export interface Record {
  organization: string
  partner: PersonInfo
  alternative: PersonInfo
}

const initState = {
  data: db,
  postFillForm: () => {}
}

export const AppContext = React.createContext<AppContextProviderState>(
  initState
)

export interface AppContextProviderProps {
  children: any
}

export interface AppContextProviderState {
  data: any[]
  postFillForm(data: any, callback: (res: any) => void): void
}

class AppContextProvider extends React.Component<
  AppContextProviderProps,
  AppContextProviderState
> {
  constructor(props: AppContextProviderProps) {
    super(props)
    this.state = {
      ...initState,
      postFillForm: this.postFillForm
    }
  }

  postFillForm = (data: any, callback: (res: any) => void) => {
    console.log(data)
    console.log('posting to API...')

    setTimeout(() => callback('finished'), 1000)
    //const xhr = new XMLHttpRequest()
    //xhr.open('POST', apiUrl)
    //xhr.onreadystatechange = (event: any) => {
    //  if (xhr.readyState === XMLHttpRequest.DONE) {
    //    callback(event.target)
    //  }
    //}
    //xhr.setRequestHeader('Content-Type', 'application/json')
    //const msg = JSON.stringify(data)
    //xhr.send(msg)
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export default AppContextProvider
