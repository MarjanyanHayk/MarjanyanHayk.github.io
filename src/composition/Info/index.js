import styles from "./index.module.scss";

function Info({ logo, text, hasLogo}) {
    return (
        <>
            {hasLogo ? (
                <div className={styles.Info}>
                    <img src={logo}/>
                    <p>{text}</p>
                </div>) : (
                <div className={styles.Info}>
                    <p>{text}</p>
                </div>
            )}
        </>
    )
}

export default Info;