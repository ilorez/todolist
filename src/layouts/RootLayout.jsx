import { Outlet } from "react-router-dom"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

function RootLayout() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout