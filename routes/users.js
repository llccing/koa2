const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
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
    currentPage: currentPage,
    total: 123,
  }

})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'

})

module.exports = router
