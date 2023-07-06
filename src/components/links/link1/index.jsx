import l from "./style.module.scss"
import {Link} from "react-router-dom"
function LinkToBtn1({href, name }) {
    return(
        <div><Link className={l.link1} to={`/${href}`}>{name}</Link></div>
    )
    
}
export default LinkToBtn1;