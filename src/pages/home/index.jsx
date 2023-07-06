import { LinkToBtn1 } from "../../components/links";
import h from "./style.module.scss";

function Home() {
  return (
    <div className={h.Home}>
      <h1>Special free site for CV preparation</h1>
      <LinkToBtn1 href={"form"} name={"Create your Resume"}/>
      <h1>hi</h1>
    </div>
  );
}
export default Home;
