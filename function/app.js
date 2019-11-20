const fs = require('fs')
const { pdf, PDFDocument, rgb, StandardFonts, degrees } = require('pdf-lib')

let createFilename = data => {
  var now = new Date()
  return `${data.firstName}-${
    data.lastName
  }-EDSC-EMP5624-2019-10-001-E-${now.getFullYear()}-${now.getMonth() +
    1}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}-${now.getMilliseconds()}.pdf`
}

const ROW_01 = 261
const ROW_03 = 204

const COLUMN_01 = 25
const COLUMN_02 = 190
const COLUMN_03 = 354

let writeFirstName = (page, font, firstName) => {
  console.log('writing first name...')
  page.drawText(firstName, {
    x: COLUMN_01,
    y: ROW_01,
    size: 14
  })
}

let writeMiddleName = (page, font, middleName) => {
  console.log('writing middle name...')
  page.drawText(middleName, {
    x: COLUMN_02,
    y: ROW_01,
    size: 14
  })
}

let writeLastName = (page, font, lastName) => {
  console.log('writing last name...')
  page.drawText(lastName, {
    x: COLUMN_03,
    y: ROW_01,
    size: 14
  })
}

let writeEmail = (page, font, email) => {
  console.log('writing email...')
  page.drawText(email, {
    x: COLUMN_01,
    y: ROW_03,
    size: 12
  })
}

let index = async data => {
  // create new pdf document
  // const pdfDoc = await PDFDocument.create()

  //create from existing
  const uint8Array = fs.readFileSync('./ESDC-EMP5624-E-DEMO.pdf')
  const pdfDoc = await PDFDocument.load(uint8Array)

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const pages = pdfDoc.getPages()
  const page1 = pages[0]

  const { width, height } = page1.getSize()
  console.log('height', height)
  console.log('width', width)

  // write data
  writeFirstName(page1, font, data.firstName)
  writeMiddleName(page1, font, data.middleName)
  writeLastName(page1, font, data.lastName)
  writeEmail(page1, font, data.email)

  const pdfBytes = await pdfDoc.save()
  fs.writeFileSync('./out/' + createFilename(data), pdfBytes)

  console.log('pdf created...')
}

const data = {
  firstName: 'Jayson',
  middleName: 'Ojaldon',
  lastName: 'Nabor',
  email: 'sonabstudios@gmail.com',
  partner: {
    firstName: 'Jayson1',
    middleName: 'Ojaldon5',
    lastName: 'Nabor3',
    email: 'sonabstudios98@gmail.com'
  }
}

index(data)
