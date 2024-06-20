import { redirect } from 'next/navigation'

import { createClient } from '/utils/supabase/server'
import { logout } from '../logout/actions'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return <>
    <p>Hello {data.user.email}</p>
    <form action={logout}>
      <button type='submit'>
        SignOut
      </button>
    </form>
  </>
}