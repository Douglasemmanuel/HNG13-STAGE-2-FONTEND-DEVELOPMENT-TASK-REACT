import { useCallback } from "react";

export interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  const login = useCallback((data: LoginData) => {
    const existingUsers = localStorage.getItem("users");
    const users = existingUsers ? JSON.parse(existingUsers) : [];

    // Find the user with the given email
    const user = users.find((user: any) => user.email === data.email);

    if (!user) {
      return { success: false, message: "User not found!" };
    }

    if (user.password !== data.password) {
      return { success: false, message: "Incorrect password!" };
    }
    localStorage.setItem("ticketapp_session", JSON.stringify(user));
    return { success: true, message: "Login successful!" };
  }, []);

  return { login };
};
