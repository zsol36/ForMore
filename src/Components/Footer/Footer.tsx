import styles from './Footer.module.css'
import footerlogo from "../../assets/logo.svg";
import { NavLink } from 'react-router-dom';
export const Footer = () => {
  return (
    <>
      <div className={styles.Footermaindiv}>
        <div className='flexcol' style={{ width: "25%" }}>
          <div className='flexrow' style={{ height: "50%" }}><img src={footerlogo} alt="" /></div>
          <div style={{ height: "50%" }}>
            <p> „Egy projekt – legyen az belsőépítészeti kialakítás,
              komplett bútorozás vagy műszaki üzemeltetés
              – rengeteg egyeztetést és precíz szakmai munkát igényel.
              A terv csak a kezdet: a valódi érték a gondos koordinációban,
              a következetes műszaki felügyeletben és a megvalósítás minőségében jelenik meg.
            </p>
          </div>
        </div>
        <div>
          <NavLink to="/szolgaltatasaink"><h4>Műszaki üzemeltetés:</h4></NavLink>
          <NavLink to="/szolgaltatasaink"><h4>Bútoripari szolgáltatások:</h4></NavLink>
          <NavLink to="/szolgaltatasaink"><h4> Tervezési szolgáltatások:</h4></NavLink>
          <NavLink to="/szolgaltatasaink"><h4> Belsőépítészeti projekt kivitelezés:</h4></NavLink>

        </div>

      </div>
    </>
  )
}
