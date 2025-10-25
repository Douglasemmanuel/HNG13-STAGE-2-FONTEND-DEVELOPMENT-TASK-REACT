import { useCallback } from "react";

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const useSignup = () => {
  const signup = useCallback((data: SignupData) => {
    
    const existingUsers = localStorage.getItem("users");
    const users = existingUsers ? JSON.parse(existingUsers) : [];

    // Check if email already exists
    const userExists = users.some((user: SignupData) => user.email === data.email);
    if (userExists) {
      return { success: false, message: "Email already registered!" };
    }

   
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    return { success: true, message: "Registration successful!" };
  }, []);

  return { signup };
};
