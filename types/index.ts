import {
  UserNameSchema,
  UserSignInSchema,
  UserSignUpSchema,
} from "@/schema/validator";
import { z } from "zod";

// user
export type IUserInput = z.infer<typeof UserSignUpSchema>;
export type IUserSignIn = z.infer<typeof UserSignInSchema>;
export type IUserSignUp = z.infer<typeof UserSignUpSchema>;
export type IUserName = z.infer<typeof UserNameSchema>;
