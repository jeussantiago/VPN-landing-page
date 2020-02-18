import React from "react";
import styles from "./footer.module.css";
import classnames from "classnames";

export default function Footer() {
  return (
    <div id="Footer" className={styles.footerWrapper}>
      <div className={classnames(styles.footerContainer, "container")}>
        <div className={classnames(styles.footerHelpRow, "row")}>

          <div className={classnames(styles.footerColContainer, "col-md", "pl-5")}>
            <h2 className={classnames(styles.footerColSectionHeader, "row")}>About NotRealVPN</h2>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Pricing</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Features</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Careers</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Privacy Policy</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Terms of Service</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Money-Back Guarantee</a>
          </div>
          <div className={classnames(styles.footerColContainer, "col-md", "pl-5")}>
            <h2 className={classnames(styles.footerColSectionHeader, "row")}>Learn More</h2>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">What is a VPN?</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Top VPN use cases</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Connect to our servers</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Keep your privacy safe</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Stream live events</a>
          </div>
          <div className={classnames(styles.footerColContainer, "col-md", "pl-5")}>
            <h2 className={classnames(styles.footerColSectionHeader, "row")}>Product</h2>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Get NotRealVPN</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">NotRealVPN for Mac</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">NotRealVPN for Windows</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">NotRealVPN for Linux</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">NotRealVPN for iOS</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">NotRealVPN for Android</a>
          </div>
          <div className={classnames(styles.footerColContainer, "col-md", "pl-5")}>
            <h2 className={classnames(styles.footerColSectionHeader, "row")}>Help</h2>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Support Center</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">FAQ</a>
            <a className={classnames(styles.footerColSectionLink, "row")} href="#Footer">Contact Us</a>
          </div>
        </div>

        <div className={classnames("row", "justify-content-end", "py-2", "px-2")}>
          <a href="#Footer"><i className={classnames(styles.footerIcon, "fa fa-twitter-square fa-2x")}></i></a>
          <a href="#Footer"><i className={classnames(styles.footerIcon, "fa fa-facebook-square fa-2x ml-4")}></i></a>
          <a href="#Footer"><i className={classnames(styles.footerIcon, "fa fa-youtube-square fa-2x ml-4")}></i></a>
        </div>

      </div>
    </div>
  )
}