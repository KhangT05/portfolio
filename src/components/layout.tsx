import { Outlet } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default Layout