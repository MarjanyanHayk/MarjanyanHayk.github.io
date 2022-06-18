import Info from "../composition/Info";
import html from "../images/icon-html.svg";
import css from "../images/icon-css.svg";
import js from "../images/icon-js.svg";
import react from "../images/icon-react.svg";
import github from "../images/icon-github.svg";
import autocad from "../images/icon-autocad.svg";
import solidworks from "../images/icon-solidworks.jpg";
import creo from "../images/icon-creo.png";
import coreldraw from "../images/icon-coreldraw.png";
import photoshop from "../images/icon-photoshop.png";
import mobile from "../images/icon-mobile.svg";
import email from "../images/icon-email.svg";
import linkedin from "../images/icon-linkedin.svg";
import address from "../images/icon-address.svg";

import styles from "./index.module.scss";

let coreSkills = [
    { logo: html, text: "HTML 5" },
    { logo: css, text: "CSS 3" },
    { logo: js, text: "JAVASCRIPT" },
    { logo: react, text: "REACT" },
    { logo: github, text: "GIT/GITHUB" },
    { logo: autocad, text: "AutoCAD" },
    { logo: solidworks, text: "SolidWorks" },
    { logo: creo, text: "Creo" },
    { logo: coreldraw, text: "CorelDraw" },
    { logo: photoshop, text: "Photoshop" }
]

let languages = [
    { text: "Armenian" },
    { text: "Russian" },
    { text: "English" },
    { text: "German" }
]

let contactInfo = [
    { logo: mobile, text: "+374 77-709467" },
    { logo: email, text: "marjanyanhayk@gmail.com" },
    { logo: linkedin, text: "www.inkedin.com/in/hayk-marjanyan" },
    { logo: address, text: "34 Manandyan str., Yerevan, Armenia" },
]


function Aside() {
    return (
        <div className={styles.Aside}>
            <div className={styles.Skills}>
                <div className={styles.CoreSkills}>
                    <h2>core skills</h2>
                    {coreSkills.map(element => {
                        return (
                            <div key={element.text}>
                                <Info logo={element.logo} text={element.text} hasLogo={true} />
                            </div>
                        )
                    })}
                </div>
                <div className={styles.Languages}>
                    <h2>languages</h2>
                    {languages.map(element => {
                        return (
                            <div key={element.text}>
                                <Info logo={element.logo} text={element.text} hasLogo={false} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.ContactInfo}>
                <h2>contact info</h2>
                {contactInfo.map(element => {
                    return (
                        <div key={element.text}>
                            <Info logo={element.logo} text={element.text} hasLogo={true}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Aside; 