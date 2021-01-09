const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set("@$", resolve("src"));
  }
};

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/eshop-manage-web/' : '/',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};
