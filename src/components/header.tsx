import { components } from "@/utils/header"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
            <ul>
                <Link to={""}></Link>
            </ul>
            <ul>
                {
                    components.map((index, key) => (
                        <NavLink to={index.path} key={key}>{index.title}</NavLink>
                    ))
                }
            </ul>
        </>
    )
}
export default Header