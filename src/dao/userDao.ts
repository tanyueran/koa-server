import User from "../model/user";
import { Service } from "typedi";
import { pool } from "../db/mysql";

@Service()
export default class UserDao {
  // 根据id请求用户信息
  async getUserInfoById(id: string): Promise<User | null> {
    let p = pool.promise();

    let [rows, fields]: any = await p.query("select * from user where id = ?", [
      id,
    ]);
    if (rows.length === 1) {
      return rows[0] as User;
    }
    return null;
  }
}
