import { PoolConnection } from "mysql2";

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

  // 添加用户信息
  // 冗余操作，测试下事务而已
  addUserInfo(user: User): Promise<boolean> {
    return new Promise((resolve, reject) => {
      pool.getConnection((err: any, con: PoolConnection) => {
        if (err) return reject(err);
        con.beginTransaction((err) => {
          if (err) return reject(err);
          con.execute(
            "insert into user(id,username,password) values(?,?,?)",
            [9999, "root", "123456"],
            (err) => {
              if (err) {
                con.rollback(() => {
                  resolve(false);
                });
                return reject(err);
              }
            }
          );
          con.execute(
            "insert into user(username,password) values(?,?)",
            [user.name, user.password],
            (err) => {
              if (err) return reject(err);
              if (user.password === "123456") {
                con.commit((err) => {
                  if (err) return reject(err);
                  resolve(true);
                });
              } else {
                con.rollback(() => {
                  resolve(false);
                });
              }
            }
          );
        });
      });
    });
  }
}
