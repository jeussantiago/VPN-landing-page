import React from "react";
import styles from "./intro.module.css";
import classnames from "classnames";


export default function Intro() {
  return (
    <div id="Home" className={styles.introWrapper}>
      <div className={classnames(styles.introContainer, "container")}>
        <div className="row">
          <div className={classnames(styles.introInnerContainer, "col-md")}>
            <div className={styles.introTextContainer}>
              <h1 className={styles.introHeading}>The VPN that protects you anywhere, anytime.</h1>
              <h2 className={styles.introSubHeading}>Trusted by No One</h2>
              <button className={classnames(styles.introButton, "btn", "btn-danger", "btn-lg", "shadow-none", "px-5", "py-2")}>Get NotRealVPN</button>
              <p className={styles.introPara}>30-day money-back guarantee</p>
            </div>
          </div>
          <div className={classnames(styles.introCol, "col-md", styles.introImg)}></div>
        </div>
      </div>
    </div>
  )
}