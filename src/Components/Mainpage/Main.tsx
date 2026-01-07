import nicebuilding from "../../assets/nicebuilding.png"
import NiceHouse from "../../assets/NiceHouse.png"
import Interlaw from "../../assets/Interlaw.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Divider from '@mui/material/Divider';

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
export const Main = () => {
  return (
    <>
    <div id="Gray-div-Ref"  className="gray-div">
      <h2>Formore mérnöki szolgáltatások</h2>
    </div>
    <div style={{margin:"5% 0 5% 0"}} id="question" className="white-div">
        <div className="question-text">
        
        <h2> Miért érdemes minket választani?</h2>

          <h4> Tapasztalat</h4> 
              <p>
                Az építőipar és a belsőépítészet világában a tapasztalat kulcskérdés. Csapatunk évek óta
                dolgozik komplex projekteken – a tervezéstől a kivitelezés koordinálásán át egészen a
                műszaki üzemeltetésig. Jól ismerjük a különböző munkafolyamatok összefüggéseit, így
                pontosan tudjuk, hogyan lehet egy projektet hatékonyan, átláthatóan és stabil szakmai
                háttérrel végig vinni.</p>
          <h4> Sokoldalúság </h4> 
              <p>
                Rugalmasságunk és szakmai sokszínűségünk tesz minket igazán erőssé. Jelen vagyunk a
                tervezés, a gyártás-előkészítés, a bútoripari projektmenedzsment, valamint a műszaki
                üzemeltetés területén is. Ez a széles portfólió lehetővé teszi, hogy bármilyen összetett
                feladatban teljes körű támogatást adjunk – legyen szó egyetlen helyiség bútorozásáról vagy
                egy többfunkciós épület hosszú távú üzemeltetéséről.</p>
          <h4>   Elhivatott, megbízható szakemberek </h4> 
            <p>
                Mérnökeink és műszaki szakembereink precizitása, igényessége és elhivatottsága jelenti
                irodánk valódi értékét. Ügyfeleink számára nemcsak szolgáltatást, hanem gondolkodó,
                felelősséget vállaló szakmai partnert biztosítunk – olyat, akire a projekt minden fázisában
                biztonsággal rá lehet bízni a feladatokat.</p>
        </div>
        <div className="question-img">
            <img style={{width:"40%"}} className="nicebuilding" src={nicebuilding} alt="" />
        </div>
    </div>
    <div  className="gray-div">
         <div style={{width: "100%"}} className="flex-col">
           <div style={{textAlign: "center"}} className="flex-row">
              <h1>Referenciák</h1>
            </div>
            <div className="flex-row">
              <img style={{maxWidth:"100%",maxHeight:"auto",paddingBottom:"2rem"}}  src={NiceHouse} alt="" />
              <img style={{maxWidth:"100%",maxHeight:"auto"}} src={Interlaw} alt="" />
            </div>
            <div style={{textAlign: "center"}} className="flex-row">
              <Button style={{borderRadius:"0",fontSize:"2rem",backgroundColor:"#111",margin:"3vh"}} variant="contained" >
               <Link to="/referenciak">   Referenciák</Link>
              </Button>
           </div>
         
          </div>
    </div>
    <div className="white-div flex-row" style={{alignItems:"normal"}}>
      <div className="information" style={{backgroundColor:"red"}}>
       <h4> Szolgáltatásaink</h4>
        <p> Az építőipari és belsőépítészeti projektek ma már annyira összetettek,
        hogy valódi szakmai háttér nélkül könnyű eltévedni a tervezéstől a kivitelezésig vezető úton.
        Mérnöki irodánk segít átlátni a teljes folyamatot: a dokumentációk elkészítésétől a gyártási egyeztetéseken át egészen a projekt tényleges megvalósításáig.
        Célunk, hogy minden partnerünk biztos lehessen abban, hogy a projekt a kezdetektől a lezárásig felkészült szakemberek kezében van.
       </p> 
      </div>
      <div className="information" style={{backgroundColor:"#333"}}>
      <h4>Műszaki üzemeltetés</h4>  
         <p>
          Egy ingatlan értéke és biztonsága nagyban múlik azon, hogyan működik a háttérben a műszaki üzemeltetés.
         Elmaradó karbantartások, rendezetlen hibakezelés vagy felelőtlen alvállalkozói munka könnyen költséges problémákhoz vezethet.
          Műszaki üzemeltetési szolgáltatásunk biztosítja, hogy minden rendszer átláthatóan működjön, a hibák gyorsan és szakszerűen legyenek kezelve, a folyamatos felügyelet pedig hosszú távon is stabil, üzembiztos működést garantáljon.
        </p>
      </div>
    </div>
    <div className="white-div" style={{justifyContent:"space-evenly"}}>
      <div className="flex-row">
        <div className="flex-row"> <HomeOutlinedIcon style={{fontSize:"90px"}}/></div>
        <div style={{textAlign:"center"}}>
          <h3> Személyesen</h3>
          <Divider/>
          <p>1132 BUDAPEST, VÁCI ÚT 34. II. EM. 1.</p>
          </div>
      
      </div>
      <div className="flex-row">
        <div className="flex-row"> <MarkunreadMailboxOutlinedIcon style={{fontSize:"90px"}}/></div>
        <div style={{textAlign:"center"}}>
          <h3> Posta</h3>
          <Divider/>
          <p>1132 BUDAPEST, VÁCI ÚT 34. II. EM. 1.</p>
          </div>
      </div>
      <div className="flex-row">
        <div className="flex-row"> <SmartphoneOutlinedIcon style={{fontSize:"90px"}}/></div>
        <div style={{textAlign:"center"}}>
          <h3> Telefon</h3>
          <Divider/>
          <p>+36 20 385 6262
</p>
          </div>
      </div>
      <div className="flex-row">
        <div className="flex-row"> <MailOutlinedIcon style={{fontSize:"90px"}}/></div>
        <div style={{textAlign:"center"}}>
          <h3> E-mail</h3>
          <Divider/>
          <p>ferenc.monori@formore.hu</p>
          </div>
      </div>
    </div>
    </>
  )
}
