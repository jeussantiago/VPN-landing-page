import React from "react";
import styles from "./Encrypt.module.css";
import classnames from "classnames";

export default function Encrypt() {
  return (
    <div>
      <div className={classnames(styles.encryptContainer, "container")}>
        <div className="row">
          <div className={classnames(styles.encryptCol, "col-md", styles.encryptImg)}></div>
          <div className={classnames(styles.encryptCol, "col-md")}>
            <div className={styles.encryptTextContainer}>
              <h1 className={styles.encryptHeader}>Stay safe no matter what you do</h1>
              <p className={styles.encryptText}>
                NotRealVPN encrypts your data when you get online and hides your IP address. The only
                data and IP address attackers see are the fake ones we have already preset for them.
              </p>
              <button className={classnames("btn", "btn-danger", "btn-lg", "shadow-none", "px-5", "py-2")}>Get NotRealVPN</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}