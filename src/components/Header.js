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
          <h2>{props.title}</h2>
          <br />
          <h2>
            <Link to="/about" activeClassName={headerStyles.navItemActive}>
              {"ABOUT"}
            </Link>
          </h2>
          <h2>
            <Link to="/news" activeClassName={headerStyles.navItemActive}>
              {"NEWS"}
            </Link>
          </h2>
          <h2>
            <Link to="/writings" activeClassName={headerStyles.navItemActive}>
              {"WRITINGS"}
            </Link>
          </h2>
        </Link>
        <h2>
          <Link to="/contact" activeClassName={headerStyles.navItemActive}>
            {"CONTACT"}
          </Link>
        </h2>
      </nav>
    </header>
  )
}
