import { Link } from "react-router-dom"
import n from "./style.module.scss"

function NavBar() {
    return(
        <nav className={n.nav}>
            <Link to={"/"}> <h2>CV<span>creator</span></h2> </Link>
        </nav>
    )
    
}
export default NavBar;