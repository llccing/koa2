const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  console.log(ctx);
  console.log(next);
  var obj = {
    "code": 200,
    "message": "",
    "data": [{
      "sn": "在线1",
      "ip": 123,
      "info": "CPU故障"
    }, {
      "sn": "在线1",
      "ip": 123,
      "info": "CPU故障"
    }, {
      "sn": "在线1",
      "ip": 123,
      "info": "CPU故障"
    }, {
      "sn": "在线",
      "ip": 123,
      "info": "CPU故障"
    }, {
      "sn": "在线",
      "ip": 123,
      "info": "CPU故障"
    }, {
      "sn": "在线",
      "ip": 123,
      "info": "CPU故障"
    }]
  };

  ctx.body = obj;
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'

})

router.get('/list', function (ctx, next) {
  let data = [];

  console.log(ctx.query)
  let { currentPage, pageSize } = ctx.query;

  for (let i = 1; i <= pageSize; i++) {
    data.push({
      id: currentPage + i,
      name: 'name' + i
    })
  }

  ctx.body = {
    data: data,
    currentPage:currentPage,
    totalPages: 100,
  }

})

module.exports = router
