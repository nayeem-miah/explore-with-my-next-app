"use client"
const Counter = () => {
    // const [count, setCount] = useState();
    console.log("THis is client component");

    return (
        <div className="text-center flex justify-center items-center flex-col gap-4 min-h-screen">
            <h3 className="text-2xl">Welcome to the next.js counter page</h3>
            <p className="text-4xl">React Client Component(RCC)</p>
        </div>
    )
}

export default Counter