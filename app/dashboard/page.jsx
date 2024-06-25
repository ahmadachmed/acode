import { createClient } from '@/utils/supabase/server'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function DashboardPage() {
  const supabase = createClient()

  const { data } = await supabase.auth.getUser()

  return (
      <Card>
        <CardHeader>
          <CardTitle>Hello {data.user.email}</CardTitle>
          <CardDescription>Hopefully you have a great day!</CardDescription>
        </CardHeader>
      </Card>

  )
}