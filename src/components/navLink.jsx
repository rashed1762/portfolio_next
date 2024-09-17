"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"

const NavLink = ({link}) => {
    const pathName=usePathname();
  return (
    <div>
        <Link className={`rounded p-1 ${pathName === link.url && "underline decoration-4 underline-offset-4"}`} href={link.url} key={link.title}>
        {link.title}
        </Link>
    </div>
  )
}

export default NavLink