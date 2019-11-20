const fs = require('fs')
const { pdf, PDFDocument, rgb, StandardFonts, degrees } = require('./pdf-lib')

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

const writePartnerFirstName = (page, font, firstName) => {
  if (!firstName) return
  console.log('writing partner first name...')
  page.drawText(firstName, {
    x: P00_COLUMN_01_3,
    y: P00_ROW_04,
    size: 14,
    font: font
  })
}

const writePartnerMiddleName = (page, font, middleName) => {
  if (!middleName) return
  console.log('writing partner middle name...')
  page.drawText(middleName, {
    x: P00_COLUMN_02_3,
    y: P00_ROW_04,
    size: 14,
    font: font
  })
}

const writePartnerLastName = (page, font, lastName) => {
  if (!lastName) return
  console.log('writing partner last name...')
  page.drawText(lastName, {
    x: P00_COLUMN_03_3,
    y: P00_ROW_04,
    size: 14,
    font: font
  })
}

const writePartnerPhone = (page, font, phone) => {
  if (!phone) return
  console.log('writing partner phone...')
  page.drawText(phone, {
    x: P00_COLUMN_01_5,
    y: P00_ROW_05,
    size: 12,
    font: font
  })
}

const writePartnerExt = (page, font, ext) => {
  if (!ext) return
  console.log('writing partner ext...')
  page.drawText(ext, {
    x: P00_COLUMN_02_5,
    y: P00_ROW_05,
    size: 12,
    font: font
  })
}

const writePartnerEmail = (page, font, email) => {
  if (!email) return
  console.log('writing partner email...')
  page.drawText(email, {
    x: P00_COLUMN_01_3,
    y: P00_ROW_06,
    size: 12,
    font: font
  })
}

const tickPartnerOralEnglish = (page, font) => {
  console.log('checking partner oral english...')
  page.drawText('x', {
    x: P00_COLUMN_01_4,
    y: P00_ROW_07,
    size: 14,
    font: font
  })
}

const tickPartnerOralFrench = (page, font) => {
  console.log('checking partner oral english...')
  page.drawText('x', {
    x: P00_COLUMN_02_4,
    y: P00_ROW_07,
    size: 14,
    font: font
  })
}

const tickPartnerWrittenEnglish = (page, font) => {
  console.log('checking partner written english...')
  page.drawText('x', {
    x: P00_COLUMN_03_4,
    y: P00_ROW_07,
    size: 14,
    font: font
  })
}

const tickPartnerWrittenFrench = (page, font) => {
  console.log('checking partner written french...')
  page.drawText('x', {
    x: P00_COLUMN_04_4,
    y: P00_ROW_07,
    size: 14,
    font: font
  })
}

const writeAltFirstName = (page, font, firstName) => {
  if (!firstName) return
  console.log('writing alt first name...')
  page.drawText(firstName, {
    x: P00_COLUMN_01_3,
    y: P00_ROW_08,
    size: 14,
    font: font
  })
}

const writeAltMiddleName = (page, font, middleName) => {
  if (!middleName) return
  console.log('writing alt middle name...')
  page.drawText(middleName, {
    x: P00_COLUMN_02_3,
    y: P00_ROW_08,
    size: 14,
    font: font
  })
}

const writeAltLastName = (page, font, lastName) => {
  if (!lastName) return
  console.log('writing alt last name...')
  page.drawText(lastName, {
    x: P00_COLUMN_03_3,
    y: P00_ROW_08,
    size: 14,
    font: font
  })
}

const writeAltPhone = (page, font, phone) => {
  if (!phone) return
  console.log('writing alt phone...')
  page.drawText(phone, {
    x: P00_COLUMN_01_5,
    y: P00_ROW_09,
    size: 12,
    font: font
  })
}

const writeAltExt = (page, font, ext) => {
  if (!ext) return
  console.log('writing alt ext...')
  page.drawText(ext, {
    x: P00_COLUMN_02_5,
    y: P00_ROW_09,
    size: 12,
    font: font
  })
}

const writeAltEmail = (page, font, email) => {
  if (!email) return
  console.log('writing alt email...')
  page.drawText(email, {
    x: P00_COLUMN_01_3,
    y: P00_ROW_10,
    size: 12,
    font: font
  })
}

const tickAltOralEnglish = (page, font) => {
  console.log('checking alt oral english...')
  page.drawText('x', {
    x: P00_COLUMN_01_4,
    y: P00_ROW_11,
    size: 14,
    font: font
  })
}

const tickAltOralFrench = (page, font) => {
  console.log('checking alt oral english...')
  page.drawText('x', {
    x: P00_COLUMN_02_4,
    y: P00_ROW_11,
    size: 14,
    font: font
  })
}

const tickAltWrittenEnglish = (page, font) => {
  console.log('checking alt written english...')
  page.drawText('x', {
    x: P00_COLUMN_03_4,
    y: P00_ROW_11,
    size: 14,
    font: font
  })
}

const tickAltWrittenFrench = (page, font) => {
  console.log('checking alt written english...')
  page.drawText('x', {
    x: P00_COLUMN_04_4,
    y: P00_ROW_11,
    size: 14,
    font: font
  })
}

const index = async data => {
  //create from existing
  const uint8Array = fs.readFileSync('./ESDC-EMP5624-E-DEMO.pdf')

  console.log(uint8Array)
  const pdfDoc = await PDFDocument.load(uint8Array)
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)

  const pages = pdfDoc.getPages()
  const page1 = pages[0]

  const { width, height } = page1.getSize()
  console.log('height', height)
  console.log('width', width)

  // page 1 start

  writeOrg(page1, font, data.organization)
  // partner contact information
  writePartnerFirstName(page1, font, data.partner.firstName)
  writePartnerMiddleName(page1, font, data.partner.middleName)
  writePartnerLastName(page1, font, data.partner.lastName)
  writePartnerPhone(page1, font, data.partner.phone)
  writePartnerExt(page1, font, data.partner.ext)
  writePartnerEmail(page1, font, data.partner.email)
  if (data.partner.oralEnglish) {
    tickPartnerOralEnglish(page1, font)
  }
  if (data.partner.oralFrench) {
    tickPartnerOralFrench(page1, font)
  }
  if (data.partner.writtenEnglish) {
    tickPartnerWrittenEnglish(page1, font)
  }
  if (data.partner.writtenFrench) {
    tickPartnerWrittenFrench(page1, font)
  }

  // alternative partner contact information
  writeAltFirstName(page1, font, data.alt.firstName)
  writeAltMiddleName(page1, font, data.alt.middleName)
  writeAltLastName(page1, font, data.alt.lastName)
  writeAltPhone(page1, font, data.alt.phone)
  writeAltExt(page1, font, data.alt.ext)
  writeAltEmail(page1, font, data.alt.email)
  if (data.alt.oralEnglish) {
    tickAltOralEnglish(page1, font)
  }
  if (data.alt.oralFrench) {
    tickAltOralFrench(page1, font)
  }
  if (data.alt.writtenEnglish) {
    tickAltWrittenEnglish(page1, font)
  }
  if (data.alt.writtenFrench) {
    tickAltWrittenFrench(page1, font)
  }

  // page 1 end

  pdfDoc.setAuthor('PDF Forms Filler')
  const pdfBytes = await pdfDoc.save()
  console.log('length', pdfBytes.length)
  fs.writeFileSync('./out/' + createFilename(data), pdfBytes)

  console.log('pdf created...')
}

const data = {
  organization: 'My Organization',
  partner: {
    firstName: 'Jayson',
    middleName: '',
    lastName: 'Nabor',
    phone: '789 7898 78979',
    ext: '7260',
    email: 'sonabstudios@gmail.com',
    oralEnglish: true,
    oralFrench: true,
    writtenEnglish: true,
    writtenFrench: true
  },
  alt: {
    firstName: 'asdasdasd',
    middleName: 'Ojaldon5',
    lastName: 'Nabor3',
    phone: '43545 435345',
    ext: '567',
    email: 'sonabstudios98@gmail.com',
    oralEnglish: true,
    oralFrench: true,
    writtenEnglish: true,
    writtenFrench: true
  }
}

index(data)
