import bb from "./style.module.scss"
function Btn1(text) {
    return(
        <div>

            <button className={bb.btn1}>{text}</button>
        </div>
    )
}

export default Btn1;