const fs = require('fs')
const pdf = require('pdf-lib')
const PDFDocument = pdf.PDFDocument
const rgb = pdf.rgb
const StandardFonts = pdf.StandardFonts
const degrees = pdf.degrees

let createFilename = () => {
  var now = new Date()
  var firstName = 'Firstname'
  var lastName = 'Lastname'
  var dateTime = `/${firstName}-${lastName}-EDSC-EMP5624-2019-10-001-E-${now.getFullYear()}-${now.getMonth() +
    1}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}-${now.getMilliseconds()}`

  return dateTime + '.pdf'
}

let index = async () => {
  const uint8Array = fs.readFileSync('./ESDC-EMP5624.pdf')
  const pdfDoc = await PDFDocument.load(uint8Array)

  console.log('pdf created...')
}

index()
