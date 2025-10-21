import Navbar from '@/components/Navbar'
import React from 'react'

export default function CommonLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <div className='min-h-dvh'>
                {children}
            </div>
            <div className="bg-teal-950 p-4 text-center">this is nextjs footer</div>
        </div>
    )
}
