import User from "../model/user";
import { Inject, Service } from "typedi";

import UserDao from "../dao/userDao";

@Service()
export default class UserService {
  userDao: UserDao;

  constructor(@Inject() userDao: UserDao) {
    this.userDao = userDao;
  }

  async getUserInfoById(id: string): Promise<User | null> {
    return this.userDao.getUserInfoById(id);
  }
}
