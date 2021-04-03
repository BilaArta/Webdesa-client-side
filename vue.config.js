const path = require('path');  


module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Project-Web-Desa-Client-Side/'
    : '/',
    
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@Components' : path.resolve(__dirname, 'src/components/'),
        '@Plugins' : path.resolve(__dirname, 'src/plugins/'),
        '@' : path.resolve(__dirname, 'src'),
      }
    }
  },
  // publicPath: process.env.VUE_APP_PUBLIC_PATH
}