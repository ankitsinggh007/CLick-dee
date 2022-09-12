import React from 'react'
import Styles from "./NavBar.module.css"

const NavBar = () => {
  return (
        <div className={Styles.nav}>
              <div className={Styles.subNav}>
                <svg width="15" height="15" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7.5" cy="8" r="7.5" fill="#FB923C"/>
                </svg>
                <p>Solar Panel Quotes</p>
              </div>
        </div>
  )
}
export default NavBar
