import Koa from "koa";
import json from "koa-json";
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const favicon = require("koa-favicon");
import "reflect-metadata";

import { useKoaServer } from "routing-controllers";

import UserController from "./controller/users";

const path = require("path");
const app = new Koa();

// icon
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
app.use(logger());
app.use(
  require("koa-static")(__dirname + "/public", {
    index: "index.html",
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date().getTime();
  await next();
  const ms = new Date().getTime() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

useKoaServer(app, {
  // 在routing-controllers注册已创建的express服务
  controllers: [UserController], // 配置(控制器，校验器等)
});

// routes
// routes(app);

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
