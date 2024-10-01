import { Outlet } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
export default function Main() {


    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
} 