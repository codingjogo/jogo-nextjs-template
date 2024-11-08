import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formSchema = z.object({
  username: z.string().min(1, {
    message: "Username is required"
  }),
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password is required and must be at least 6 characters long"
  })
})