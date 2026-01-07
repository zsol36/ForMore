import styles from './Footer.module.css'
import footerlogo from "../../assets/logo.svg";
import { NavLink } from 'react-router-dom';
export const Footer = () => {
  return (
    <>
      <div className={styles.Footermaindiv}>
        <div className={styles.flexcol}>
          <div className={styles.flexrow} style={{width:"60%"}}><img  src={footerlogo} alt="" /></div>
          <div className={`${styles.footertext} ${styles.flexrow}`}>
            <p style={{ textAlign: "center",padding:"0",margin:"0" }}> „Egy projekt – legyen az belsőépítészeti kialakítás,
              komplett bútorozás vagy műszaki üzemeltetés
              – rengeteg egyeztetést és precíz szakmai munkát igényel.
              A terv csak a kezdet: a valódi érték a gondos koordinációban,
              a következetes műszaki felügyeletben és a megvalósítás minőségében jelenik meg.
            </p>
          </div>
        </div>

        <div className={styles.flexcol}>
          <h2>Szolgáltatásaink:</h2>
          <NavLink to="/szolgaltatasaink"><h4>Műszaki üzemeltetés:</h4></NavLink>
          <NavLink to="/szolgaltatasaink"><h4>Bútoripari szolgáltatások:</h4></NavLink>
          <NavLink to="/szolgaltatasaink"><h4> Tervezési szolgáltatások:</h4></NavLink>
          <NavLink to="/szolgaltatasaink"><h4> Belsőépítészeti projekt kivitelezés:</h4></NavLink>
        </div>
      </div>
    </>
  )
}
