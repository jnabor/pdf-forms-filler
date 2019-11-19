module.exports = {
  //assetPrefix: process.env.NODE_ENV === 'production' ? '/molotov' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/auth': { page: '/auth' },
      '/auth/signup': { page: '/auth/signup' },
      '/auth/reset': { page: '/auth/reset' },
      '/auth/confirm': { page: '/auth/confirm' },
      '/forms/EDSC-EMP5624-2019-10-001-E': {
        page: '/forms/EDSC-EMP5624-2019-10-001-E'
      }
    }
  }
}
