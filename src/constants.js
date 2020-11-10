const environment = require('./environment')

module.exports = {
  buildLocation: function (req) {
    return `${req.protocol}://${req.hostname}:${environment.PORT}${req.originalUrl}`
  }
}
