"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const informations: { title: string; href: string; description: string }[] = [
    {
        title: "Contact Us",
        href: "/contact-us",
        description:
            "We are always there to provide help",
    },
    {
        title: "Terms Of Service",
        href: "/termsofservice",
        description:
            "Understand the terms and conditions for using MyVA services.",
    },
    {
        title: "About Us",
        href: "/about",
        description:
            "Our Story behind MyVA",
    }
]

const Services: { title: string; href: string; description: string }[] = [
    {
        title: "Our Packages",
        href: "/packages",
        description:
            "Find your best offer!",
    },
    {
        title: "MyVA Personalized Approach Process",
        href: "our-approach",
        description:
            "How Our Virtual Agents Work Personalized & Seamless for You",
    }
]

export function MyMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            {
                                Services.map((item, index) => {
                                    return (
                                        <ListItem key={Math.random()} href={item.href} title={item.title}>
                                            {item.description}
                                        </ListItem>
                                    )
                                })
                            }
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            {
                                informations.map((item, index) => {
                                    return (
                                        <ListItem key={Math.random()} href={item.href} title={item.title}>
                                            {item.description}
                                        </ListItem>
                                    )
                                })
                            }
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={props.href!}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
