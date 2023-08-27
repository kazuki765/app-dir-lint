import * as z from "zod";

export const User = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(8).max(255),
});

export type User = z.infer<typeof User>;
