import { createClient } from '@/utils/supabase/server'
import { logout } from '../logout/actions'
import Link from 'next/link'

export default async function DashboardPage() {
  const supabase = createClient()

  const { data } = await supabase.auth.getUser()
  
  return <>
    <p>Hello {data.user.email}</p>
    <form action={logout}>
      <button type='submit'>
        SignOut
      </button>
    </form>
    <Link href={'/dashboard/work'}>Work</Link>
  </>
}