import styles from "./index.module.scss";
import avatar from "../images/avatar-image.jpg"

function Header(){
    return(
        <div className={styles.Header}>
            <h1 className={styles.HeaderName}>marjanyan hayk</h1>
            <img src={avatar} alt="avatar-image" className={styles.HeaderImage} />
        </div>
    )
}

export  default Header;