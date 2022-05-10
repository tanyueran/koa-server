# koa 的装饰模式的 demo（类似 java 中访问的注解）

> koa、routing-controllers

## 示例 userController

```ts
import User from "../model/user";
import { JsonController, Param, Get } from "routing-controllers";
import { Inject, Service } from "typedi";

import UserService from "../service/userService";

@Service()
@JsonController()
export default class UserController {
  userService: UserService;

  constructor(@Inject() userService: UserService) {
    this.userService = userService;
  }

  @Get("/user/:id")
  getUsers(@Param("id") id: string): Promise<User> {
    return this.userService.getUserInfoById(id);
  }
}
```
