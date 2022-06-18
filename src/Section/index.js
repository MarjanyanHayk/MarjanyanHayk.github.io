import AboutWorkAndEducations from "../composition/AboutWorkAndEducations";
import {v4 as uuid} from "uuid";
import styles from "./index.module.scss";

let aboutWork = [
    {
        position: "Technical Manager", place: "INTERNATIONAL MASIS TABAK (LLC)",
        year: "2017 to Present", about: "Planning, coordination and control of mechanical, reconstruction and renovation projects. Maintenance of primary tobacco machines, ordering of spare parts, rebuilding according new demands, creating working drawings for manufacturing. Ensuring that the workplace is safe for the staff"
    },
    {
        position: "Technical Manager", place: "GRAND TOBACCO Armenian-Canadian Joint Venture Co.Ltd",
        year: "2013-2017"
    },
    { position: "Engineer", place: "LA Solar Group", year: "2016" },
    { position: "Engineer", place: "Yerevan Jewel lery Plant - 1 Gnomon OJSC", year: "2012-2013" },
]

let aboutEducation = [
    {
        place: "DownTown Academy (Digitain)", position: "Javascript/React, Student",
        year: "2021-2022"
    },
    {
        place: "State Engineering University of Armenia (Polytechnic)", position: "Mechanical engineering, Master's degree",
        year: "2011-2013"
    },
    {
        place: "State Engineering University of Armenia (Polytechnic)", position: "Mechanical engineering, Master's degree",
        year: "2005-2009"
    },
]


function Section() {
    return (
        <div className={styles.Section}>
            <div className={styles.WorkExperience}>
                <h2>WORK EXPERIENCE</h2>
                {aboutWork.map(element => {
                    return (
                        <div key={uuid()}>
                            <AboutWorkAndEducations position={element.position}
                                place={element.place}
                                year={element.year} />
                        </div>
                    )
                })}
            </div>
            <div className={styles.EducationBackground}>
                <h2>EDUCATION BACKGROUND</h2>
                {aboutEducation.map(element => {
                    return (
                        <div key={uuid()}>
                            <AboutWorkAndEducations place={element.place}
                                position={element.position}
                                year={element.year} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Section;