import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="w-[200px] p-5 bg-teal-950 min-h-dvh ">
            <h3 className="text-teal-300 text-2xl"><Link href={'/'}>Dashboard</Link></h3>

            <div className="grid gap-2 mt-4 grid-cols-1">
                <Link href="/settings" className="">settings</Link>
                <Link href="/dashboard" className="">Dashboard</Link>
                <Link href="/profile" className="">profile</Link>
                <Link href="/" className="">home</Link>
            </div>
        </div >
    )
}
