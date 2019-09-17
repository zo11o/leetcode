const Koa = require('koa2');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
const app = new Koa;
let home = Router();
app.use(cors());
app.use(koaBody())
home.get('/', async (ctx) => {
    return ctx.body = {
        code: 200,
        message: '这个是首页'
    }

})

home.get('/ajax', async (ctx) => {
    return ctx.body = {
        code: 200,
        data: ctx.request.query
    }
})
home.post('/ajax', async (ctx) => {
    return ctx.body = {
        code: 200,
        data: ctx.request.body
    }
})
home.get('/jsonp', async (ctx) => {
    let callbackName = ctx.request.query.callback;
    let data = {
        code: 200,
        data: ctx.request.query
    }
    //返回体直接是函数调用，调用的实参是要后台要传递的数据~由于data是对象，需要先进行json格式化
    return ctx.body = `${callbackName}(${JSON.stringify(data)})`
})
app.use(home.routes());
app.use(home.allowedMethods())
app.listen(3000, () => {
    console.log('start');
})
