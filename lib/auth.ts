import type { User } from "@/types/user"

// In a real app, this would use a proper authentication system
export async function getCurrentUser(): Promise<User | null> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 300))

  // For demo purposes, always return a mock user
  return {
    id: "user_1",
    name: "Demo User",
    email: "demo@example.com",
  }
}

export async function login(email: string, password: string): Promise<User> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // For demo purposes, always return a mock user
  return {
    id: "user_1",
    name: "Demo User",
    email,
  }
}

export async function signup(name: string, email: string, password: string): Promise<User> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // For demo purposes, always return a mock user
  return {
    id: "user_1",
    name,
    email,
  }
}

export async function logout(): Promise<void> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real app, this would clear the session
  return
}
