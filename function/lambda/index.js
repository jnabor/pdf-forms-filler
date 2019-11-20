const fs = require('fs')
const { pdf, PDFDocument, rgb, StandardFonts, degrees } = require('./pdf-lib')
var AWS = require('aws-sdk');
var s3 = new AWS.S3({ apiVersion: '2006-03-01' });
var params = { Bucket: 'ss-pdfformsfiller', Key: 'template/ESDC-EMP5624-E-DEMO.pdf' };

//const P00_ROW_01 = 261 // section 1 : row 1
//const P00_ROW_02 = 261 // section 1 : row 2
const P00_ROW_03 = 304 // designated referral partner contact information : organization
const P00_ROW_04 = 261 // referral partner names
const P00_ROW_05 = 231 // referral contact number
const P00_ROW_06 = 204 // referral contact email
const P00_ROW_07 = 175 // referral contact language
const P00_ROW_08 = 131 // alternative referral partner names
const P00_ROW_09 = 101 // alternative referral contact number
const P00_ROW_10 = 74 // alternative referral contact email
const P00_ROW_11 = 45 // alternative referral contact language

const P00_COLUMN_01_3 = 25
const P00_COLUMN_02_3 = 190
const P00_COLUMN_03_3 = 354

const P00_COLUMN_01_4 = 65
const P00_COLUMN_02_4 = 117
const P00_COLUMN_03_4 = 354
const P00_COLUMN_04_4 = 405

const P00_COLUMN_01_5 = 25
const P00_COLUMN_02_5 = 134
//const P00_COLUMN_03_5 = 354
//const P00_COLUMN_04_5 = 354
//const P00_COLUMN_05_5 = 354

const getFile = async () => {
  return new Promise((resolve, reject) => {
    s3.getObject(params, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

const putFile = async (key, pdf) => {
  return new Promise((resolve, reject) => {
    const par = {
      Bucket: params.Bucket,
      Key: key,
      Body: pdf
    }
    s3.putObject(par, (err, data) => {
      if (err) return reject(err)
      resolve("Successfully saved object to " + params.Bucket + "/" + par.Key)
    })
  })
}

const createFilename = data => {
  var now = new Date()
  return `${data.partner.firstName}-${
    data.partner.lastName
  }-EDSC-EMP5624-2019-10-001-E-${now.getFullYear()}-${now.getMonth() +
    1}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}-${now.getMilliseconds()}.pdf`
}

const writeOrg = (page, font, organization) => {
  if (!organization) return
  console.log('writing organization...')
  page.drawText(organization, {
    x: P00_COLUMN_01_3,
    y: P00_ROW_03,
    size: 14,
    font: font
  })
}

exports.handler = async(event) => {
  const data = event
  console.log(data)

  console.log('getting template from s3...')
  const getS3Object = await getFile()
  
  //console.log('AcceptRanges', getS3Object.AcceptRanges)
  //console.log('LastModified', getS3Object.LastModified)
  //console.log('ContentLength', getS3Object.ContentLength)
  //console.log('ContentType', getS3Object.ContentType)
  //console.log('Body', getS3Object.Body)
  console.log('template loaded.')
  
  const pdfDoc = await PDFDocument.load(getS3Object.Body)
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  
  const pages = pdfDoc.getPages()
  const page1 = pages[0]
  
  const { width, height } = page1.getSize()
  console.log('height', height)
  console.log('width', width)
  
  writeOrg(page1, font, data.organization)


  pdfDoc.setAuthor('PDF Forms Filler')
  const pdfBytes = await pdfDoc.save()
  
  console.log('saving to s3...')
  const fileName = './temp/' + createFilename(data)
  console.log('filename:', fileName )
  
  //fs.writeFileSync(, pdfBytes)
  //const puttS3Object = await putFile('/out/' + createFilename(data), pdfBytes)

  
  const response = {
    statusCode: 200,
    body: JSON.stringify('PDF Generated!')
  }
  return response
};
