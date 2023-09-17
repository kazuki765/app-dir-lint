import { User } from "./user";
describe("User", () => {
  const user: User = {
    name: "John Doe",
    email: "example@example.com",
    password: "password",
  };
  it("should be a valid user", () => {
    const result = User.safeParse(user);
    expect(result.success).toBe(true);
  });
});
