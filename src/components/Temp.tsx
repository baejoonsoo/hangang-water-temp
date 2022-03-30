import * as S from "../style/mainPage";
import LightSpeed from "react-reveal/LightSpeed";
import Slide from "react-reveal/Slide";
import { hangangDataType } from "../interface/hangangData";

interface props {
  hangangData: hangangDataType;
}

function Temp({ hangangData }: props) {
  return (
    <S.Page>
      <S.HangangTempData>
        <S.HangangImg />
        <S.TempData>
          <LightSpeed right cascade>
            <p className="topText">지금 한강은</p>
          </LightSpeed>
          <Slide left>
            <p className="temp">{hangangData.station}°C</p>
          </Slide>
          <div className="time">
            <p>{hangangData.time}</p>
          </div>
        </S.TempData>
      </S.HangangTempData>
    </S.Page>
  );
}

export default Temp;
