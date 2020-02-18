import React from "react";
import styles from "./comments.module.css";
import classnames from "classnames";

export default function Comments() {
  return (
    <div>
      <div className={classnames(styles.commentsContainer, "container")}>
        <h1 className={styles.commentsHeader}>See what our users are saying about NotRealVPN</h1>

        <div className="row">
          <div className="col-md-6 my-4">
            <div className={classnames(styles.commentsTweetBox)}>
              <div className={classnames(styles.userDataContainer)}>
                <span className={styles.userIcon}><i class="fa fa-user-circle"></i></span>
                <h2 className={styles.userName}>Dustin Garber</h2>
              </div>
              <div className={classnames(styles.tweetContainer)}>
                <p>
                  Finally decided to purchase NotRealVpn and I stopped getting DDosed when I'm
                  in the middle of my CSGO ranked matches. Best decisionin awhile. #NotREalVPN #CSGO.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-4">
            <div className={classnames(styles.commentsTweetBox)}>
              <div className={classnames(styles.userDataContainer)}>
                <span className={styles.userIcon}><i class="fa fa-user-circle"></i></span>
                <h2 className={styles.userName}>James Smith</h2>
              </div>
              <div className={classnames(styles.tweetContainer)}>
                <p>
                  I work remote most of the time and NotRealVpn has become crucial for my
                  everyday working routine.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 my-4">
            <div className={classnames(styles.commentsTweetBox)}>
              <div className={classnames(styles.userDataContainer)}>
                <span className={styles.userIcon}><i class="fa fa-user-circle"></i></span>
                <h2 className={styles.userName}>Juan Carlos</h2>
              </div>
              <div className={classnames(styles.tweetContainer)}>
                <p>
                  Great performance, consistently fast speeds, and security unmatched. I've tested other
                  VPN's but the others just don't compare to what NotRealVPN has to offer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-4">
            <div className={classnames(styles.commentsTweetBox)}>
              <div className={classnames(styles.userDataContainer)}>
                <span className={styles.userIcon}><i class="fa fa-user-circle"></i></span>
                <h2 className={styles.userName}>Maria Rodriguez</h2>
              </div>
              <div className={classnames(styles.tweetContainer)}>
                <p>
                  In business, just like in life, we occasionally rely on the help of others in
                  the pursuit of success and happiness. Without the help and input of others,
                  business would be a lot harder than it already is. Thank You NotRealVPN.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}