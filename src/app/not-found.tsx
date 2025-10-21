import Link from "next/link";


export default function NotFound() {
    return (
        <div className='flex items-center justify-center min-h-dvh'>
            <h3>page not found</h3> <span className="p-3 hover:underline text-teal-600"><Link href={'/'}>back to home</Link></span>
        </div>
    )
}
