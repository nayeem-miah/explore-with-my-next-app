"use client"

import { useEffect } from "react"

function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])
    return (
        <div className="flex items-center justify-center text-center text-red-500 flex-col min-h-screen">
            <h3 className="text-2xl">something went wrong !!</h3>
            <p>error : {error?.message}</p>

            <button onClick={() => reset()} className=" text-white  mt 2xl:bg-red-600 py-2 px-4 rounded shadow-2xl border-white border-2">try again</button>
        </div>
    )
}

export default ErrorPage