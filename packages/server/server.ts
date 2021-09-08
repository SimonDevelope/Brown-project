require("dotenv").config();

const Koa = require("koa");
const app = new Koa();
const port = process.env.DB_PORT || 4001;

app.use(async (ctx: any) => {
  ctx.body = "Hello World";
});

app.listen(port, () => {
  console.log("the server is running on 4000");
});
