'use client'

import { NavLink } from '@/types/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Links = () => {
    const pathName = usePathname()
    const navLinks: NavLink[] = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Products',
            path: '/products'
        }
    ]
    return (
        <>
            {navLinks.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    className={`${pathName === link.path ? 'bg-black text-white p-2 rounded-md' : ''}`}
                >
                    {link.title}
                </Link>
            ))}
        </>

    )
}

export default Links
