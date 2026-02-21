
import { components } from "@/utils/footer"
import { Link, NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <ul>
                <Link to={""}></Link>
            </ul>
            <ul>
                {
                    components.map((index, key) => (
                        <NavLink to={index.href} key={key}>{index.icons}</NavLink>
                    ))
                }
            </ul>
        </>
    )
}
export default Footer