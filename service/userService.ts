export default class UserService {
  static async getUserInfoById(id: string) {
    return {
      id,
      name: "name",
    };
  }
}
