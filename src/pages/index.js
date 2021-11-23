import React from "react"
import * as mainStyles from "../css/main.css"
import * as containerStyles from "../css/container.module.css"
import * as indexStyles from "../css/index.module.css"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({ children }) => (
  <div>
    <nav id={indexStyles.mainNav}>
      <div className={containerStyles.container}>
        <div
          className={containerStyles.row}
          style={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <StaticImage src={"../img/decor.png"} alt="logo" id="main-nav-logo" />

          <ul id={indexStyles.mainNavItems}>
            <li>
              <Link className="current" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/info"}>Info</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {children}
    <footer id={indexStyles.footerMain}>
      <StaticImage
        src={"../img/home_decor_footer_logo.png"}
        alt="footer-logo"
      />
      <hr className={indexStyles.footerLine} />
      <p className={indexStyles.footerNote}>
        &copy; {new Date().getFullYear()} Decor
      </p>
    </footer>
  </div>
)

export default IndexPage
