console.log(process.env.NODE_ENV)
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/urban-change/'
    : '/',
  transpileDependencies: [
    'vuetify'
  ]
}
