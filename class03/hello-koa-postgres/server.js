const Koa =require('koa');
const app = new Koa(); // response

app.use(ctx => {
    ctx.body= 'Hello Koa';
    // console.log(ctx.request);
}); 
app.listen(3000);
