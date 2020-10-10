import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${props.page === "info" &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <div>
            <h2>{props.title}</h2>
            <br />
            <h2>
              <Link to="/bloglist" activeClassName={headerStyles.navItemActive}>
                {"BLOG"}
              </Link>
            </h2>
          </div>
        </Link>
        <div>
          <h2>
            <Link to="/info" activeClassName={headerStyles.navItemActive}>
              {"INFO"}
            </Link>
          </h2>
          <h2>
            <Link to="/about" activeClassName={headerStyles.navItemActive}>
              {"ABOUT"}
            </Link>
          </h2>
        </div>
      </nav>
    </header>
  )
}
