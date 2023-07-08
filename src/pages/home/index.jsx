import { LinkToBtn1 } from "../../components/links";
import { FaStar, FaMagic, FaList, FaCode, FaPlus } from "react-icons/fa";
import h from "./style.module.scss";
import NavBar from "../../components/navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={h.Home}>
      <header className={h.header}>
        <NavBar />
        <div className={h.div_box}>
          <div className={h.header_text}>
            <h1>Special free site for CV preparation</h1>
            <LinkToBtn1 href={"form"} name={"Create your Resume"} />
            <Link to={"/style_pages"}>  style </Link>

          </div>
          <div className={h.header_img}>
            <img src="./img/img.jpg" alt="img" />
          </div>
        </div>
      </header>
      <section className={h.carts}>
        <div className={h.cart}>
          <div className={h.cart_img_title}>
            <ul className={h.cart_star}>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </ul>
            <h2>Quick and easy resume builder</h2>
          </div>
          <p>
            With our online CV creator, it is simple for anyone to quickly
            create a professional resume. Enter your personal details and begin
            filling out your resume content. Finally, choose one of our 36
            available resume layouts, and download your resume.
          </p>
        </div>
        <div className={h.cart}>
          <div className={h.cart_img_title}>
            <ul className={h.cart_star}>
              <li>
                <FaMagic />
              </li>
            </ul>
            <h2>More likely to land a job</h2>
          </div>
          <p>
            With a representative and professional resume, you will stand out
            amongst all other applicants. You are probably more likely to be
            invited to an interview with an professional Resume.
          </p>
        </div>
        <div className={h.cart}>
          <div className={h.cart_img_title}>
            <ul className={h.cart_star}>
              <li>
                <FaList />
              </li>
            </ul>
            <h2>Organize your applications</h2>
          </div>
          <p>
            Often, it is important to be able to tailor your resume based on the
            job you wish to apply for. With CV creator, you can create and
            manage several different resumes in an organised way through your
            own personal account hub.
          </p>
        </div>

        <div></div>
      </section>

      <section className={h.section_ikki}>
        <div className={h.section_ikki_box}>
          <h2>Increase your chances of getting a job</h2>
          <p>With the CV creator you can create a resume quickly and easily.</p>
          <LinkToBtn1 href={"form"} name={"Create your Resume"} />
        </div>
      </section>
      <footer>
        <p>


          2023 {<FaCode />} This website created by <a href="https://albison.uz/" target="blank">Albison students</a>
        </p>
      </footer>
    </div>
  );
}
export default Home;
