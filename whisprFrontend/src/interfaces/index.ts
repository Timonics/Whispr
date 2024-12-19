import { ReactNode } from "react";

export interface FormData {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export interface LoginData {
    email: string
    password: string
}

export interface MyAppContext {
    userProfile: boolean
}

export interface MyAppProviderProps {
    children: ReactNode
}