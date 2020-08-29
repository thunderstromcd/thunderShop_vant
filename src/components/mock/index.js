const Mock = require('better-mock')
Mock.mock('http://api.cms.liulongbin.top/register', 'post', function (options) {
  return 123
})
