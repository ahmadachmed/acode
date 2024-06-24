'use client'

import { logout } from "@/app/logout/actions";
import UserItem from "./UserItem";
import { Command, CommandGroup, CommandItem, CommandList } from "./ui/command";
import { LucideUser, LucideHardHat, LucideSettings, LucideCigarette, LucideHome } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = ({ username, email }) => {
    const menuList = [
        {
            group: "General",
            items: [
                {
                    icon: <LucideHome />,
                    link: "/dashboard",
                    text: "Home"
                },
                {
                    icon: <LucideUser />,
                    link: "/dashboard",
                    text: "Profile"
                },
                {
                    link: "/dashboard/work",
                    icon: <LucideHardHat />,
                    text: "Work"
                },
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    icon: <LucideSettings />,
                    link: "/dashboard",
                    text: "General Settings"
                },
                {
                    icon: <LucideCigarette />,
                    link: "/dashboard",
                    text: "Privacy"
                },
            ]
        }
    ]

    return (
        <div className="fixed gap-4 border-r-2 w-[300px] min-h-screen p-4 text-primary-foreground flex flex-col">
            <div>
                <UserItem userName={username} email={email} />
            </div>
            <div className="grow">
                <Command>
                    <CommandList>
                        {menuList.map((menu, key) => (
                            <CommandGroup heading={menu.group} key={key}>
                                {menu.items.map((opt, optKey) => (
                                    <Link href={opt.link} key={optKey}>
                                        <CommandItem className="flex gap-2 cursor-pointer">
                                            {opt.icon}{opt.text}
                                        </CommandItem>
                                    </Link>

                                ))}
                            </CommandGroup>
                        ))}
                    </CommandList>
                </Command>
            </div>
            <form action={logout}>
                <Button variant="outline" type='submit'>
                    <p className="text-primary">Sign Out</p>
                </Button>
            </form>
        </div>
    );
}

export default Navbar;