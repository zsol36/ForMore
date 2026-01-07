import { useEffect, useState } from 'react';
import styles from './Navbar.module.css'
import { Smartphone, Email } from '@mui/icons-material';
import logo from "../../assets/logo.svg";
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Divider } from '@mui/material';
export const Navbar = () => {
  const [hideTop, setHideTop] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
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
          <Smartphone fontSize='small' /> +36203856262
        </h4>
        <h4 style={{ padding: "1rem" }}>
          <Email fontSize='small'></Email>  ferenc.monori@formore.hu
        </h4>
      </div>


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
            <NavLink to="/rolunk" className={({ isActive }) => isActive ? `${styles.navlink} ${styles.activeSubsite}` : styles.navlink}>Rólunk</NavLink>
          </h3>
          <h3 className={styles.subsiteitem}>
            <NavLink to="/szolgaltatasaink" className={({ isActive }) => isActive ? `${styles.navlink} ${styles.activeSubsite}` : styles.navlink}>Szolgáltatásaink</NavLink>
          </h3>
          <h3 className={styles.subsiteitem}>
            <NavLink to="/referenciak" className={({ isActive }) => isActive ? `${styles.navlink} ${styles.activeSubsite}` : styles.navlink}>Referenciák</NavLink>
          </h3>
          <h3 className={styles.subsiteitem}>
            <NavLink to="/kapcsolat" className={({ isActive }) => isActive ? `${styles.navlink} ${styles.activeSubsite}` : styles.navlink}>Kapcsolat</NavLink>
          </h3>
        </div>
        <div className={styles.menubuttonwrapper}>
          <Button className={styles.menubutton} onClick={() => setOpen(!open)}>☰</Button>
        </div>

      </div>
      <div className={open ? `${styles.menumobile} ${styles.open}` : styles.menumobile}>
        <div style={{ height: "10vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <img onClick={() => navigate("/")} style={{ cursor: "pointer", maxHeight: "100%", width: "auto" }} className={styles.Formorelogo} src={logo} ></img>
        </div>
        <Divider color="gray" />
        <div className={styles.menuItems}>

          <NavLink className={styles.menuwrapper} to="/rolunk">
            {({ isActive }) => (
              <h3 className={isActive ? `${styles.navlink} ${styles.activeSubsite} ${styles.mobilemenuitem}` : `${styles.navlink} ${styles.mobilemenuitem}`}>
                Rólunk
              </h3>
            )}
          </NavLink>


          <NavLink className={styles.menuwrapper} to="/szolgaltatasaink">
            {({ isActive }) => (
              <h3 className={isActive ? `${styles.navlink} ${styles.activeSubsite} ${styles.mobilemenuitem}` : `${styles.navlink} ${styles.mobilemenuitem}`}>
                Szolgáltatásaink
              </h3>
            )}
          </NavLink>


          <NavLink className={styles.menuwrapper} to="/referenciak">
            {({ isActive }) => (
              <h3 className={isActive ? `${styles.navlink} ${styles.activeSubsite} ${styles.mobilemenuitem}` : `${styles.navlink} ${styles.mobilemenuitem}`}>
                Referenciák
              </h3>
            )}
          </NavLink>
          <NavLink className={styles.menuwrapper} to="/kapcsolat">
            {({ isActive }) => (
              <h3 className={isActive ? `${styles.navlink} ${styles.activeSubsite} ${styles.mobilemenuitem}` : `${styles.navlink} ${styles.mobilemenuitem}`}>
                Kapcsolat
              </h3>
            )}
          </NavLink>
        </div>
      </div>
    </div>

  );
}
export default Navbar;