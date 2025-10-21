import Link from "next/link"

const Navbar = () => {
    return (
        <div className="flex justify-between bg-teal-950 p-4">
            <h3><Link href={'/'}>Hello Next js</Link></h3>
            <div className="grid gap-4 grid-cols-4">
                <Link href="/about" className="">About</Link>
                <Link href="/dashboard" className="">Dashboard</Link>
                <Link href="/contact" className="">Contact</Link>
                <Link href="/login" className="">Login</Link>
            </div>
        </div>
    )
}

export default Navbar