import { z } from "zod";
import { TUser } from "@/types/user";

export const schema = z.object({
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(8, {
    message: "You must enter 8 characters or more",
  }),
  phone: z
    .string()
    .min(8, {
      message: "You must enter 8 characters or more",
    })
    .max(12, { message: "please enter valid number" }),
});

export const initialValues: TUser = {
  name: "",
  email: "",
  password: "",
  phone: "",
};
