import React from "react";
import styles from "./WorldConnect.module.css";
import classnames from "classnames";

export default function WorldConnect() {
  return (
    <div id="Product">
      <div className={classnames(styles.worldContainer, "container")}>
        <div className="row">
          <div className={classnames(styles.worldCol, "col-md", styles.worldImg)}></div>
          <div className={classnames(styles.worldCol, "col-md")}>
            <div className={styles.worldTextContainer}>
              <h1 className={styles.worldHeader}>Be anywhere in the world at the click of a button</h1>
              <p className={styles.worldText}>
                Have a video thats censored where you're located? Maybe it's not somewhere else in the world. <br /><br />
                NotReal VPN delivers unlimited access to video, music, social media, and more by defeating
              those annoying content restrictions and censorships.
              </p>
              {/* <button className={classnames("btn", "btn-danger", "btn-lg", "shadow-none", "px-5", "py-2")}>Get NotRealVPN</button> */}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}