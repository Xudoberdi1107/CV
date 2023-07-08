import { Link } from "react-router-dom";
import c from "./style.module.scss"
import { FaAngleLeft,FaAngleRight } from "react-icons/fa"

function Cursor() {
    return(
        <div className={c.cursor}>
            <Link to={"/"}>Back</Link>
            <Link to={"/form"}>Next</Link>
        </div>
    )
    
}
export default Cursor;