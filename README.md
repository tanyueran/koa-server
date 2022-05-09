# koa 的装饰模式的 demo（类似 java 中访问的注解）

> koa、routing-controllers

## 示例 userController

```ts
import { JsonController, Param, Get } from "routing-controllers";

import UserService from "../service/userService";

@JsonController()
export default class Users {
  @Get("/user/:id")
  getUsers(@Param("id") id: string) {
    return UserService.getUserInfoById(id);
  }
}
```
