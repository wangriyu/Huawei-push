var debug = require('debug')('huawei_push:notification')

var utils = require('./utils')
var constant = require('./constant')

var Notification = function (options) {
  debug('notification init:', options)
  utils.parseOptions.call(this, options)
  return this
}

Notification.prototype.requestAccess = utils.requestAccess

Notification.prototype.notificationSend = function (appId, token, msg, callback) {
  var self = this
  this.requestAccess(function (error, accessToken) {
    if (error) {
      return
    }
    utils.requestNotification(token, msg, self.config, constant.appMethod.notificationSend, callback)
  })
}

Notification.prototype.send = Notification.prototype.notificationSend

module.exports = Notification
