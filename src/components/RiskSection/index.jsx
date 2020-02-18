import React from "react";
import styles from "./riskSection.module.css";
import classnames from "classnames";
// import * as Icon from 'react-bootstrap-icons';

export default function RiskSection() {
  return (
    <div id="Risk" className={styles.riskWrapper}>
      <div className={classnames(styles.riskContainer, "container")}>
        <h1 className={styles.riskHeading}>The risks of not using a VPN</h1>
        <div className={styles.riskGrid}>
          <div className={classnames(styles.riskGridRow, "row")}>
            <div className={classnames(styles.riskGridElem, "col-md-4")}>
              <div className={styles.iconDesign}><i className="fa fa-server"></i></div>
              <h2 className={styles.riskGridHeading}>ISP Tracking</h2>
              <p className={styles.riskGridDesc}>
                Your Internet Service Provider has access to a lot of information about you. Unknowing to you, they often sell this information to buyers.
            </p>
            </div>
            <div className={classnames(styles.riskGridElem, "col-md-4")}>
              <div className={styles.iconDesign}><i className="fa fa-user-secret"></i></div>
              <h2 className={styles.riskGridHeading}>Account Breach</h2>
              <p className={styles.riskGridDesc}>
                Your email account holds more than just emails. It gives access to all the devices and websites that are linked to that email.
            </p>
            </div>
            <div className={classnames(styles.riskGridElem, "col-md-4")}>
              <div className={styles.iconDesign}><i className="fa fa-id-card"></i></div>
              <h2 className={styles.riskGridHeading}>Identity Theft</h2>
              <p className={styles.riskGridDesc}>
                Thieves can steal your personal information to apply for new credit cards, open new accounts, and make purchases.
            </p>
            </div>
          </div>
          <div className={classnames(styles.riskGridRow, "row")}>
            <div className={classnames(styles.riskGridElem, "col-md-4")}>
              <div className={styles.iconDesign}><i className="fa fa-sitemap"></i></div>
              <h2 className={styles.riskGridHeading}>Wi-Fi Hacking</h2>
              <p className={styles.riskGridDesc}>
                Hackers have many ways to steal your sensitive information once they get into the same Wi-Fi as you are.
            </p>
            </div>
            <div className={classnames(styles.riskGridElem, "col-md-4")}>
              <div className={styles.iconDesign}><i className="fa fa-bug"></i></div>
              <h2 className={styles.riskGridHeading}>Malware Infection</h2>
              <p className={styles.riskGridDesc}>
                Malware can steal sencitive information, steal money, and even lock your own files by simply being installed once.
            </p>
            </div>
            <div className={classnames(styles.riskGridElem, "col-md-4")}>
              <div className={styles.iconDesign}><i className="fa fa-window-close"></i></div>
              <h2 className={styles.riskGridHeading}>DDoS Injections</h2>
              <p className={styles.riskGridDesc}>
                DDos attacks can slow down your computer's connection or even disconnect you from the game you've been eagerly waiting to play.
            </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
