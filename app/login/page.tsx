"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/auth";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(username, password);
      router.replace("/admin");
    } catch (e) {
      if (e instanceof Error) {
        toast.error(e.message);
        return;
      }

      toast.error("Unexpected error");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-lg bg-white p-6 shadow">
        <h1 className="mb-6 text-xl font-semibold text-gray-900">Login</h1>

        <div className="relative mb-4">
          <input
            id="login"
            className="peer w-full rounded border border-gray-300 px-3 py-2 text-sm placeholder-transparent focus:border-blue-500 focus:outline-none"
            placeholder="Login"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            htmlFor="login"
            className={`absolute left-3 text-sm transition-all ${
              username
                ? "-top-2 bg-white px-1 text-xs text-blue-600"
                : "top-2.5 text-gray-500 peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-blue-600"
            } `}
          >
            Login
          </label>
        </div>

        <div className="relative mb-6">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="peer w-full rounded border border-gray-300 px-3 py-2 pr-10 text-sm placeholder-transparent focus:border-blue-500 focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label
            htmlFor="password"
            className={`absolute left-3 text-sm transition-all ${
              password
                ? "-top-2 bg-white px-1 text-xs text-blue-600"
                : "top-2.5 text-gray-500 peer-focus:-top-2 peer-focus:bg-white peer-focus:px-1 peer-focus:text-xs peer-focus:text-blue-600"
            } `}
          >
            Password
          </label>

          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
          >
            👁
          </button>
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
