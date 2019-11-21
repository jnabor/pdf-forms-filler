module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/auth': { page: '/auth' },
      '/auth/signup': { page: '/auth/signup' },
      '/auth/reset': { page: '/auth/reset' },
      '/auth/confirm': { page: '/auth/confirm' },
      '/forms': { page: '/forms' },
      '/forms/EDSC-EMP5624-2019-10-001-E': {
        page: '/forms/EDSC-EMP5624-2019-10-001-E'
      }
    }
  },
  crossOrigin: 'anonymous'
  //assetPrefix: '/pdf-forms-filler'
}
