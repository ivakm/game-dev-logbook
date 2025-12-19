"use client";

import { getById, put, remove } from "@/lib/db";

type Role = "guest" | "author";

type AuthRecord = {
  id: "session";
  isAuthenticated: boolean;
  role: Role;
};

const AUTH_ID = "session";

export async function login(login: string, password: string): Promise<void> {
  if (login !== "admin" && password !== "admin") {
    // TODO need to add a message and show it in toastr or something else
    return;
  }

  const record: AuthRecord = {
    id: AUTH_ID,
    isAuthenticated: true,
    role: "author",
  };

  await put<AuthRecord>("auth", record);
}

export async function logout(): Promise<void> {
  await remove("auth", AUTH_ID);
}

export async function isAuthenticated(): Promise<boolean> {
  const auth = await getById<AuthRecord>("auth", AUTH_ID);
  return Boolean(auth?.isAuthenticated);
}

export async function getRole(): Promise<Role> {
  const auth = await getById<AuthRecord>("auth", AUTH_ID);
  return auth?.role ?? "guest";
}
