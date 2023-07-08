import Cursor from "../../components/cursor";
import m from "./style.module.scss";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function ModeStyle() {
  return (
    <div className={m.ModeStyle}>
      <div className={m.navbar_div}>
        <Cursor />
        {/* <h1>f</h1> */}
      </div>
      <div className={m.karusel}>
        <Carousel>
         

          <div>
            <img src="./img/cvimage.png" />
          </div>

          <div>
            <img src="./img/cvimage.png" />
          </div>

          <div>
            <img src="./img/cvimage.png" />
          </div>

          <div>
            <img src="./img/cvimage.png" />
          </div>

          <div>
            <img src="./img/cvimage.png" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default ModeStyle;
