import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

function RootLayout() {
    return (
        <div className="flex flex-col gap-6 min-h-full">
            <header className="bg-background-light py-1 px-2 m-2 rounded-lg shadow-md ">
                <Nav />
            </header>

            <main className="flex flex-col items-center">
                <div className="flex flex-col gap-2 min-w-fit w-11/12 md:w-8/12 lg:6/12">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default RootLayout