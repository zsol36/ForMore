import Csokonai1 from "../../assets/References/Csokonai1.png"
import Csokonai2 from "../../assets/References/Csokonai2.png"
import Csokonai3 from "../../assets/References/Csokonai3.png"
import akademia1 from "../../assets/References/akademia1.png"
import akademia2 from "../../assets/References/akademia2.png"
import akademia3 from "../../assets/References/akademia3.png"
import richter1 from "../../assets/References/richter1.png"
import richter2 from "../../assets/References/richter2.png"
import richter3 from "../../assets/References/richter3.png"
import Alkohol1 from "../../assets/References/Alkohol1.png"
import Alkohol2 from "../../assets/References/Alkohol2.png"
import Alkohol3 from "../../assets/References/Alkohol3.png"
import kaszi1 from "../../assets/References/Kaszi1.png"
import airport1 from "../../assets/References/airport1.png"
import airport2 from "../../assets/References/airport2.png"
import airport3 from "../../assets/References/airport3.png"
import placeholder from "../../assets/placeholder.png"
import styles from './References.module.css'

export const References = () => {

    return (
        <>
            <div id="Gray-div-Ref" className="gray-div">
                <h2 className="title">Referenciák</h2>
            </div>
            <div className={styles.griddiv} style={{paddingBottom:"5vh"}}>
                <div className={styles.imagecontainer}>
                    <div style={{ width: "100%" }} >
                        <div style={{ justifyContent: "normal", padding: "2vh" }}>
                            <h1 style={{textAlign: "left" }} >Csokonai színház belsőépítészeti munkái</h1>
                        </div>
                        <div className={styles.pictures}>
                            <img src={Csokonai1} className={styles.fixedimage} alt="" />
                            <img src={Csokonai2} className={styles.fixedimage} alt="" />
                            <img src={Csokonai3} className={styles.fixedimage} alt="" />

                        </div>
                    </div>
                </div>
                <div className={styles.imagecontainer}>
                    <div style={{ width: "100%" }} >
                        <div style={{ justifyContent: "normal", padding: "2vh" }}>
                            <h1 style={{textAlign: "left" }} >ILEA Nemzetközi rendőr képző akadémia </h1>
                        </div>
                        <div className={styles.pictures}>
                            <img src={akademia1} className={styles.fixedimage} alt="" />
                            <img src={akademia2} className={styles.fixedimage} alt="" />
                            <img src={akademia3} className={styles.fixedimage} alt="" />

                        </div>
                    </div>
                </div>
                <div className={styles.imagecontainer}>
                    <div style={{ width: "100%" }} >
                        <div style={{ justifyContent: "normal", padding: "2vh" }}>
                            <h1 style={{textAlign: "left" }} >Nagyváradi kaszinó</h1>
                        </div>
                        <div className={styles.pictures}>
                            <img src={kaszi1} className={styles.fixedimage} alt="" />
                            <img src={placeholder} className={styles.fixedimage} alt="" />
                            <img src={placeholder} className={styles.fixedimage} alt="" />

                        </div>
                    </div>
                </div>
                <div className={styles.imagecontainer}>
                    <div style={{ width: "100%" }} >
                        <div style={{ justifyContent: "normal", padding: "2vh" }}>
                            <h1 style={{textAlign: "left" }} >Richter 5. épület belsőépítészeti munkái</h1>
                        </div>
                        <div className={styles.pictures}>
                            <img src={richter1} className={styles.fixedimage} alt="" />
                            <img src={richter2} className={styles.fixedimage} alt="" />
                            <img src={richter3} className={styles.fixedimage} alt="" />

                        </div>
                    </div>
                </div>
                <div className={styles.imagecontainer}>
                    <div style={{ width: "100%" }} >
                        <div style={{ justifyContent: "normal", padding: "2vh" }}>
                            <h1 style={{textAlign: "left" }} >Mr. alkohol</h1>
                        </div>
                        <div className={styles.pictures}>
                            <img src={Alkohol1} className={styles.fixedimage} alt="" />
                            <img src={Alkohol2} className={styles.fixedimage} alt="" />
                            <img src={Alkohol3} className={styles.fixedimage} alt="" />

                        </div>
                    </div>
                </div>
                <div className={styles.imagecontainer}>
                    <div style={{ width: "100%" }} >
                        <div style={{ justifyContent: "normal", padding: "2vh" }}>
                            <h1 style={{textAlign: "left" }} >Belgrád Airport City iroda </h1>
                        </div>
                        <div className={styles.pictures}>
                            <img src={airport1} className={styles.fixedimage} alt="" />
                            <img src={airport2} className={styles.fixedimage} alt="" />
                            <img src={airport3} className={styles.fixedimage} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

