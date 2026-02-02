import style from "./Rolunk.module.css";
import Kaszi from "../../assets/Kaszi.png";
export const Rolunk = () => {
  return (
    <>
    <div id="Gray-div-Ref"  className="gray-div">
      <h2 className="title">Rólunk</h2>
    </div>
    <div style={{width:"90%"}} className={style.whitediv}>
        <div  className={style.questionimg}>
                <img style={{width:"100%"}} src={Kaszi} alt="" />
        </div>
        <div className={style.questiontext}>
           <h2>Kik vagyunk? – A forMore háttere</h2> 
           <p> Cégcsoportunk folyamatos fejlődésének és szakmai bővülésének eredményeként hoztuk létre a forMore mérnöki irodát, amely vállalatunk harmadik, önálló egységeként működik.
            Célunk egy olyan egységes, magas színvonalú mérnöki háttér megteremtése, amely mindhárom cégünk munkáját hatékonyan támogatja – a tervezéstől a gyártási folyamatokon át egészen a műszaki üzemeltetésig.
            A forMore rugalmasan reagál ügyfeleink igényeire, szakmai stabilitást és megbízható műszaki támogatást nyújtva a projekt teljes életciklusa során.</p>
         <h2>  A cégcsoport tagjai</h2> 
         <ul>
            <li><p>	Forment – tervezőiroda</p></li>	
            <li><p>	Formilia – kültéri konyhák gyártása</p></li>	
            <li><p>	forMore – mérnöki iroda</p></li>	
        </ul>
        </div>
    </div>
    <div id="" className="white-div">
        <div style={{width:"80%"}}>
        
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
    </div>
    </>
  )
}
