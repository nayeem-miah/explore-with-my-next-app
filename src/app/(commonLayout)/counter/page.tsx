// ! "use client" // this is not good prentices
// import { useState } from "react"

import Counter from "@/components/Counter"

const CounterPage = () => {

    //! this is not good prentices
    // const [count, setCount] = useState();
    // console.log("THis is client component");
    return (
        <div>

            {/* //* this is client component */}
            <Counter />
        </div>
    )
}

export default CounterPage