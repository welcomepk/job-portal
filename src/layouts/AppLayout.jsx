import { Outlet } from "react-router-dom"
import Header from "@/components/Header"

const AppLayout = () => {
  return (
    <>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <footer className="p-10 mt-10 bg-gray-800 text-center">
        Made with ❤️ by Pramod
      </footer>
    </>
  )
}

export default AppLayout