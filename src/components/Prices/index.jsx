import React from "react";
import styles from "./prices.module.css";
import classnames from "classnames";

export default function Prices() {
  return (
    <div id="Prices">
      <div className={classnames(styles.pricesContainer, "container")}>
        <h1 className={styles.pricesHeader}>Get NotRealVPN Today!</h1>
        <div className="row">
          <div className={classnames(styles.pricesDealContainer, "col-lg-4")}>
            <div className={styles.pricesCard}>
              <div className={classnames(styles.pricesDurationContainer, "row", "justify-content-center")}>
                <h2 className={styles.pricesDuration}>1-month</h2>
              </div>
              <div className={classnames(styles.pricesDeal, "row", "justify-content-center")}>
                <h2 className={classnames(styles.costText, "align-self-center")}>USD</h2>
                <h2 className={classnames(styles.cost, "align-self-center")}>9.95</h2>
                <h2 className={classnames(styles.costText, "align-self-center")}>/mo</h2>
              </div>
              <div className={styles.pricesParaContianer}>
                <p className={styles.pricesPara}>USD 9.95 billed every month</p>
                <p className={styles.pricesPara}>30-day money-back gurantee</p>
              </div>
              <div>
                <button className={classnames(styles.pricesButton, "btn", "btn-danger", "btn-lg", "shadow-none", "px-3", "py-2")}>Get NotRealVPN</button>
              </div>
            </div>
          </div>
          <div className={classnames(styles.pricesDealContainer, "col-lg-4")}>
            <div className={styles.pricesCard}>
              <div className={classnames(styles.pricesDurationContainer, "row", "justify-content-center")}>
                <h2 className={styles.pricesDuration}>12-months</h2>
              </div>
              <div className={classnames(styles.pricesDeal, "row", "justify-content-center")}>
                <h2 className={classnames(styles.costText, "align-self-center")}>USD</h2>
                <h2 className={classnames(styles.cost, "align-self-center")}>5.95</h2>
                <h2 className={classnames(styles.costText, "align-self-center")}>/mo</h2>
              </div>
              <div className={styles.pricesParaContianer}>
                <p className={styles.pricesPara}>USD 5.99 billed every month</p>
                <p className={styles.pricesPara}>30-day money-back gurantee</p>
              </div>
              <div>
                <button className={classnames(styles.pricesButton, "btn", "btn-danger", "btn-lg", "shadow-none", "px-3", "py-2")}>Get NotRealVPN</button>
              </div>
            </div>
          </div>
          <div className={classnames(styles.pricesDealContainer, "col-lg-4")}>
            <div className={styles.pricesCard}>
              <div className={classnames(styles.pricesDurationContainer, "row", "justify-content-center")}>
                <h2 className={styles.pricesDuration}>24-months</h2>
              </div>
              <div className={classnames(styles.pricesDeal, "row", "justify-content-center")}>
                <h2 className={classnames(styles.costText, "align-self-center")}>USD</h2>
                <h2 className={classnames(styles.cost, "align-self-center")}>1.99</h2>
                <h2 className={classnames(styles.costText, "align-self-center")}>/mo</h2>
              </div>
              <div className={styles.pricesParaContianer}>
                <p className={styles.pricesPara}>USD 1.99 billed every month</p>
                <p className={styles.pricesPara}>30-day money-back gurantee</p>
              </div>
              <div>
                <button className={classnames(styles.pricesButton, "btn", "btn-danger", "btn-lg", "shadow-none", "px-3", "py-2")}>Get NotRealVPN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}