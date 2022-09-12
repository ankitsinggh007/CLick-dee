import React from 'react'
import Styles from './CongratsPage.module.css'

function CongratsPage(props) {
  return (
    <div>
        <div className={Styles.nav}>
            <div className={Styles.subNav}>
                <svg width="15" height="15" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7.5" cy="8" r="7.5" fill="#FB923C"/>
                    </svg>
                    <p>Solar Panel Quotes</p>
                </div>
        </div>
        <div className={Styles.CongoMSG}>
            <span className={Styles.Congrats}>Congratulations,{props.name}</span>
            <div className={Styles.slogan}>
                <span  >You pre-qualify for $2,500 Flex Card plus $0 cost Vision & Dental coverage.</span><span>Call us now to secure your possible additional benefits & flex card.</span>
            </div>
            <button className={Styles.btn}>88880000000</button>
            <spa>Act fast! This application expires in: 00:32 minute.</spa>
        </div>
            <div className={Styles.totalFooterContainer}>
                <div className={Styles.ImageFooter}>
                    <svg width="420" height="22.2" viewBox="0 0 417 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="-1" width="418" height="22" fill="#A8D29F" />
                    </svg>
                    <img src='https://s3-alpha-sig.figma.com/img/b46d/66be/000f81ad264a964176323f50e890681b?Expires=1663545600&Signature=QFr7AkmiOoqcdjCt5fbZ7CFBwqeuv4zNJogba-i8IMcfjbYDOLGEBs1mFDrpffSutod~go6pXloSD5Iy0sMQS~F71mDgyGrSItzwvqIYXG9umWCU~cnssYQkxbWlBFhDKFyxzmkByCVR-gcoYHVxafKqd0CbR71Au6RjuV7D-wUuht-158XK1JW~-H03rFmp2HLPxyHHwGKyTfJ3uYW~RX2Irwqi61y54fINclxIMRKyQSoTQhPuMtX7hKtJwlDdk161~P8U~A4YlRO9W7i1XtIcBxe0wlLPFCwXv1XF1cKhPvBeSgOAV4wO~kGyeEuvWxAD~WRqfGmCV9Xwbc0MFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' alt='not found'/>
                </div>
                <div className={Styles.footerBlack}>
                    {/* <div className={Styles.footerTextContainer}> */}
                        <div className={Styles.SolarPanelDiv}>
                            <svg width="15px" height="15px" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="7.5" cy="8" r="7.5" fill="#FB923C"/>
                            </svg>
                            <p>
                                Solar Panel Quotes
                            </p>
                        </div>

                        <div className={Styles.CopyrightText}>
                            Copyright © 2021 | Eruptic Inc.
                        </div>

                        <div className={Styles.Privacy}>
                            CALIFORNIA PRIVACY | PRIVACY POLICY | TERMS OF USE
                        </div>
                </div>
            </div>
    </div>
  )
}

export default CongratsPage
