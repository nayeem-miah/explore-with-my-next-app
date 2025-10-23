"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname();
    console.log(pathname);



    return (
        <div className="flex justify-between text-white bg-teal-950 p-4">
            <h3><Link href={'/'}>Hello Next js</Link></h3>
            <div className="grid gap-4 grid-cols-4">
                <Link href="/about" className={`${pathname === "/about" && "text-blue-500 underline"}`}>About</Link>
                <Link href="/dashboard" className={`${pathname === "/dashboard" ? "text-blue-500 underline" : "hover:underline"}`}>Dashboard</Link>
                <Link href="/gallery" className={`${pathname === "/gallery" && "text-blue-500 underline"}`}>Gallery</Link>
                <Link href="/login" className={`${pathname === "/login" && "text-blue-500 underline"}`}>Login</Link>
            </div>
        </div>
    )
}

export default Navbar