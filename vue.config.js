const path = require('path');  


module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@Components' : path.resolve(__dirname, 'src/components/'),
        '@Plugins' : path.resolve(__dirname, 'src/plugins/'),
      }
    }
  },
  // publicPath: process.env.VUE_APP_PUBLIC_PATH
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Project-Web-Desa-Client-Side/'
    : '/'
}