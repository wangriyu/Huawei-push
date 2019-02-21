module.exports = {
  title: 'not none',
  content: 'not none too',
  icon: 'image link',
  appId: 123456,
  appSecret: 'xxxxxxxxx',
  appPkgName: 'com.huawei.push.app',
  tokens: ['xxxxxxxx'],
  callback: function () {
    console.log(JSON.stringify(arguments, null, 2))
  }
}
