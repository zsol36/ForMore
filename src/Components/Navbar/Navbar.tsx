import  { useEffect, useState } from 'react';
import styles from './Navbar.module.css'
import {Smartphone,Email} from '@mui/icons-material';
import logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from 'react-router-dom';
export const Navbar = () => {
    const [hideTop, setHideTop] = useState(false);
    const navigate = useNavigate();
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 0) {
        setHideTop(true);
      } else {
        setHideTop(false);
      }

    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      
      
      <div
        className={
          hideTop
            ? `${styles.topBar} ${styles.topBarHidden}`
            : styles.topBar
        }
      >
          <h4>
            <Smartphone fontSize='small'/> +36203856262
        </h4>  
        <h4 style={{padding:"1rem"}}>
            <Email fontSize='small'></Email>  ferenc.monori@formore.hu 
        </h4> 
      </div>

      {/* ALSÓ BÁR (felcsúszik a felső helyére)Rólunk Szolgáltatásaink Referenciák Kapcsolat */}
      <div
        className={
          hideTop
            ? `${styles.bottomBar} ${styles.bottomBarShiftUp}`
            : styles.bottomBar
        }
      >
        <img onClick={() => navigate("/")} style={{ cursor: "pointer" }} className={styles.Formorelogo} src={logo} ></img>
        <div className={styles.subsites}>
          <h3 className={styles.subsiteitem}>
            <NavLink to="/rolunk" className={({isActive}) => isActive ? `${styles.navlink} ${styles.activeSubsite}` : styles.navlink}>Rólunk</NavLink>
          </h3>
          <h3 className={styles.subsiteitem}>
            <NavLink to="/szolgaltatasaink" className={({isActive}) => isActive ? `${styles.navlink} ${styles.activeSubsite}` : styles.navlink}>Szolgáltatásaink</NavLink>
          </h3>
          <h3 className={styles.subsiteitem}>
            <NavLink to="/referenciak" className={({isActive}) => isActive ? `${styles.navlink} ${styles.activeSubsite}` : styles.navlink}>Referenciák</NavLink>
          </h3>
          <h3 className={styles.subsiteitem}>
            <NavLink to="/kapcsolat" className={({isActive}) => isActive ? `${styles.navlink} ${styles.activeSubsite}` : styles.navlink}>Kapcsolat</NavLink>
          </h3>
        </div>
      </div>

    </div>
  );
}
export default Navbar;