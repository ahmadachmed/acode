import { createClient } from "@/utils/supabase/server";
import { login, signup } from "./actions";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    redirect("/dashboard");
  }

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" autoComplete="username" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" autoComplete="current-password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  );
}
