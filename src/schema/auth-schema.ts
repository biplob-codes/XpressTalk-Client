import { z } from "zod";

export const userSignupSchema = z.object({
  username: z
    .string({ required_error: "Username is required" })
    .min(3, "Username must be at least 3 characters long")
    .max(255, "Username cannot exceed 255 characters"),

  email: z
    .string({ required_error: "Email is required" })
    .email("Please provide a valid email"),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
});

export const userSigninSchema = z.object({
  email: z
    .string()
    .email("Please provide a valid email")
    .min(1, "Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(255, "Password cannot exceed 255 characters"),
});

export type UserSignUpType = z.infer<typeof userSignupSchema>;
export type UserSignInType = z.infer<typeof userSigninSchema>;
