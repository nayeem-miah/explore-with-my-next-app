"use client"
import { useRouter } from "next/navigation";


function HomePage() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard")
  }

  console.log("Hello world!!");
  return (
    <div className="text-center flex justify-center items-center flex-col gap-4 min-h-screen">
      <h3 className="text-2xl">Welcome to the next.js Home page</h3>
      <p className="text-4xl">React Server Component(RSC)</p>

      {/* //* using server component */}
      {/* <button><Link href={'/dashboard'}>dashboard</Link></button> */}

      {/*  //! using client component ---> do not use server component */}
      <button onClick={handleNavigation}>dashboard</button>
    </div>
  )
}

export default HomePage;