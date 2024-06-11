"use client"

import React from 'react'
import NavButton from './NavButton'
import { usePathname } from 'next/navigation'

const routes = [
    {
        href: "/",
        label: "Overview"
    },
    {
        href: "/transactions",
        label: "Transactions"
    },
    {
        href: "/accounts",
        label: "Accounts"
    },
    {
        href: "/categories",
        label: "Categories"
    },
    {
        href: "/settings",
        label: "Settings"
    },
]

export const Navigation = () => {

    const pathname = usePathname()

    return (
        <nav className='hidden lg:flex items-center gap-x-2 overflow-x-auto'>
            {routes.map(({ href, label }) => (
            <NavButton
                key={href}
                href={href}
                label={label}
                isActive={pathname === href}
            />
            ))}
        </nav>
    )
}