import { Link } from "react-router-dom";
import c from "./style.module.scss"
import { FaAngleLeft,FaAngleRight } from "react-icons/fa"

function Cursor( {back , next}) {
    return(
        <div className={c.cursor}>
            <Link to={`${back}`}>Back</Link>
            <Link to={`${next}`}>Next</Link>
        </div>
    )
    
}
export default Cursor;