import { DataTableDemo } from "./dataTable";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Work() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Work Lists</CardTitle>
                <CardDescription>There is the work that fetch in Home</CardDescription>
            </CardHeader>
            <CardContent>
                <DataTableDemo/>
            </CardContent>
            <CardFooter>
                test
            </CardFooter>
        </Card>
    )
}