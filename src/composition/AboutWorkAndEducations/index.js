import styles from "./index.module.scss";

function AboutWorkAndEducations({ position, place, year }) {
    return (
        <div className={styles.AboutWorkAndEducations}>
            <div className={styles.position}>{position}</div>
            <div className={styles.place}>{place}</div>
            <p className={styles.year}>{year}</p>
        </div>
    )
}

export default AboutWorkAndEducations;