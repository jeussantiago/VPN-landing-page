import React from "react";
import styles from "./DeviceConnect.module.css";
import classnames from "classnames";

export default function DeviceConnect() {
  return (
    <div>
      <div className={classnames(styles.deviceContainer, "container")}>
        <div className="row">
          <div className={classnames(styles.deviceCol, "col-md")}>
            <div className={styles.deviceTextContainer}>
              <h1 className={styles.deviceHeader}>Get NotRealVPN on all your devices</h1>
              <p className={styles.deviceText}>
                We made sure that NotRelVPN works as amazingly on one device as it does on all
                your other devices. It's both easy-to-use and usable for many platforms such as
                Mac, iOS, Windows, Android, Linux, and more.
              </p>
              <div id="iconsContainer">
                <span className={styles.deviceIcon}><i class="fa fa-apple"></i></span>
                <span className={styles.deviceIcon}><i class="fa fa-android"></i></span>
                <span className={styles.deviceIcon}><i class="fa fa-windows"></i></span>
                <span className={styles.deviceIcon}><i class="fa fa-linux"></i></span>
                <span className={styles.deviceIcon}><i class="fa fa-chrome"></i></span>
                <span className={styles.deviceIcon}><i class="fa fa-firefox"></i></span>
              </div>
              {/* <button className={classnames("btn", "btn-danger", "btn-lg", "shadow-none", "px-5", "py-2")}>Get NotRealVPN</button> */}
            </div>
          </div>
          <div className={classnames(styles.deviceCol, "col-md", styles.deviceImg)}></div>
        </div>
      </div>
    </div>
  )
}