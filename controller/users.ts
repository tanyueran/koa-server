import { JsonController, Param, Get } from "routing-controllers";

import UserService from "../service/userService";

@JsonController()
export default class Users {
  @Get("/user/:id")
  getUsers(@Param("id") id: string) {
    return UserService.getUserInfoById(id);
  }
}
