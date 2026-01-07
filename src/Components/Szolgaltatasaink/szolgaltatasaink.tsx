import bathroom from "../../assets/Bathroom.png";
export const Szolgaltatasaink = () => {
  return (
    <>
      <div id="Gray-div-Ref" className="gray-div">
        <h2>Szolgáltatásaink</h2>
      </div>
      <div style={{ width: "90%", padding: "5vh 0 5vh 0" }} className="white-div">
        <div className={` question-text`}>
          <ol>
           <li> <h4>  Bútoripari szolgáltatások:</h4></li>
            <ul>
              <li><p>Előzetes / Indikatív árajánlatok készítése </p></li >
              <li><p>Végleges árajánlatok készítése </p></li >
              <li><p>Gyártói árajánlatok készítése </p></li>
              <li><p>  Bútoripari projektmenedzsment </p></li>
              <li><p>  Helyszíni művezetés </p></li>
            </ul>
            <li><h4> Tervezési szolgáltatások: </h4></li>
            <ul>
              <li><p>Dokumentációk és műszaki tartalmak készítése</p></li>
              <li><p>Árazatlan költségvetések készítése </p></li >
              <li><p>Műszaki leírások készítése  </p></li>
              <li><p>Helyiség könyvek készítése </p></li >
            </ul>

           <li> <h4>Belsőépítészeti projekt bonyolítás: </h4></li>
            <ul>
              <li><p>Komplett bútorozások szervezése</p></li >
            </ul>
            <li><h4>Műszaki üzemeltetés:</h4></li>
            <ul>
              <li><p>Épületüzemeltetési folyamatok támogatása</p></li>
              <li><p>Karbantartási feladatok ütemezése és dokumentálása</p></li>
              <li><p>Hibabejelentések kezelése, jegyzőkönyvezés</p></li>
              <li><p>Épületgépészeti rendszerek alapvető felügyelete</p></li >
              <li><p>Villamos és gépész alvállalkozók munkájának koordinálása</p></li>
              <li><p>Rendszeres bejárások, állapotfelmérések</p></li >
              <li><p>Eszköz- és készletnyilvántartás vezetése</p></li>
              <li><p>Üzemeltetési riportok, átadás-átvételi dokumentációk előkészítése</p></li >
            </ul>
          </ol>
        </div>
        <div  className="question-img">
          <img style={{width:"65%"}}  src={bathroom} alt="" />
        </div>
      </div>
    </>
  )
}
