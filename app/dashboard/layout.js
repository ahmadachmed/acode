import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import Navbar from '@/components/Navbar';
import Header from './Header';

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
        <div className='flex items-start justify-start'>
          <Navbar username={data.user.email} email={data.user.email} />
          <div className='w-full h-full pl-[300px]'>
            <Header/>
            <div className='p-6'>
              {children}
            </div>
          </div>
        </div>
  );
}
