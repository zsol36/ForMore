import { Divider } from "@mui/material"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MarkunreadMailboxOutlinedIcon from '@mui/icons-material/MarkunreadMailboxOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

export const Contact = () => {
    return (
        <>
            <div id="Gray-div-Ref" className="gray-div">
                <h2>Elérhetőségeink</h2>
            </div>
            <div className="white-div" style={{ justifyContent: "space-evenly" , margin:"10vh 0 10vh 0" }}>
                <div className="flex-row" style={{width:"20%"}}>
                    <div className="flex-row"> <HomeOutlinedIcon style={{ fontSize: "90px" }} /></div>
                    <div style={{ textAlign: "center",width:"60%" }}>
                        <h3> Személyesen</h3>
                        <Divider />
                        <p>1132 BUDAPEST, VÁCI ÚT 34. II. EM. 1.</p>
                    </div>

                </div>
                <div className="flex-row" style={{width:"20%"}}>
                    <div className="flex-row"> <MarkunreadMailboxOutlinedIcon style={{ fontSize: "90px" }} /></div>
                    <div style={{ textAlign: "center",width:"60%"}}>
                        <h3> Posta</h3>
                        <Divider />
                        <p>1132 BUDAPEST, VÁCI ÚT 34. II. EM. 1.</p>
                    </div>
                </div>
                <div className="flex-row" style={{width:"20%"}}>
                    <div className="flex-row"> <SmartphoneOutlinedIcon style={{ fontSize: "90px" }} /></div>
                    <div style={{ textAlign: "center" ,width:"60%"}}>
                        <h3> Telefon</h3>
                        <Divider />
                        <p>+36 20 385 6262
                        </p>
                    </div>
                </div>
                <div className="flex-row" style={{width:"20%"}}>
                    <div className="flex-row"> <MailOutlinedIcon style={{ fontSize: "90px" }} /></div>
                    <div style={{ textAlign: "center",width:"60%" }}>
                        <h3> E-mail</h3>
                        <Divider />
                        <p>ferenc.monori@formore.hu</p>
                    </div>
                </div>
            </div>
        </>

    )
}