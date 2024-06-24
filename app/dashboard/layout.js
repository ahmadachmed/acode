import { Inter } from "next/font/google";
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard - ACODE",
  description: "Acode is a Web Portofolio",
};

export default async function DashboardLayout({ children }) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
