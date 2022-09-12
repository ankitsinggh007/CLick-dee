import React from 'react'
import Styles from './MainContainer.module.css'
function MainContainer() {
  return (
      <div className={Styles.Container}>
          <span className={Styles.p1}>Our Customers Say</span>
          <span className={Styles.p2}>What they’re saying?</span>
          <span className={Styles.p3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis tellus eu turpis sit eget mattis urna.</span>
      </div>
   )
}
export default MainContainer
