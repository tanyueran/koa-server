import {
  JsonController,
  Param,
  Get,
  Authorized,
  Body,
  Post,
} from "routing-controllers";
import { Inject, Service } from "typedi";

import User from "../model/user";
import UserService from "../service/userService";
import { Result, errorResult, successResult } from "../responseResult";

@Service()
@JsonController()
export default class UserController {
  userService: UserService;

  constructor(@Inject() userService: UserService) {
    this.userService = userService;
  }

  // @Authorized(["admin"])
  @Get("/user/:id")
  async getUsers(@Param("id") id: string): Promise<Result<User | null>> {
    let data = await this.userService.getUserInfoById(id);
    if (!data) {
      return errorResult(null, "查无此人");
    }
    data.password = "";
    return successResult(data);
  }

  @Post("/user")
  addUser(@Body() user: User): Promise<boolean> {
    return this.userService.addUser(user);
  }
}
