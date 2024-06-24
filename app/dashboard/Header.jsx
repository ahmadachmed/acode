'use client'

import { Commands } from "@/components/Command"
import { Button } from "@/components/ui/button"
import { BellIcon } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"


export default function Header() {
    const [notif, setNotif] = useState([
        {
            text: "This is your notif",
            date: "02-01-2024",
            read: true
        },
        {
            text: "This is your notif",
            date: "02-01-2024",
            read: true
        },
        {
            text: "This is your notif",
            date: "02-01-2024",
            read: false
        }
    ])

    return (
        <div className="grid grid-cols-2 gap-4 p-4 border-b">
            <Commands />
            <div className="flex justify-end items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild >
                        <Button className="relative" variant="outline" size="icon">
                            <div className={`absolute -top-1 right-0 h-3 w-3 rounded-full ${notif.find((x) => x.read === true) ? "bg-slate-500" : ""}`} />
                            <BellIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {notif.map((item, key) => (
                            <DropdownMenuItem key={key} className="py-2 px-3 cursor-pointer hover:bg-neutral-50 transition flex items-center gap-2 ">
                                <div className={`rounded-full w-2 h-2 ${!item.read ? "bg-slate-500" : "border"}`} />
                                <div className={`flex flex-col ${item.read ? "text-neutral-400" : ""}`}>
                                    <p>{item.text}</p>
                                    <p className="text-xs font-light">{item.date}</p>
                                </div>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    )
}