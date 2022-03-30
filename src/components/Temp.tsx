import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "../style/mainPage";
import Logo from "../img/Logo.svg";
import LightSpeed from "react-reveal/LightSpeed";
import Slide from "react-reveal/Slide";

interface hangangDataType {
  temp: string;
  time: string;
  station: string;
  status: string;
  type: string;
}

function Temp() {
  const [hangangData, setHangangData] = useState<hangangDataType>({
    temp: "0",
    time: "",
    station: "",
    status: "",
    type: "",
  });

  const getHangangData = () => {
    axios.get("https://api.hangang.msub.kr").then(({ data }) => {
      console.log(data);
      setHangangData(data);
    });
  };

  useEffect(() => {
    getHangangData();
  }, []);

  return (
    <S.Page>
      <S.HangangTempData>
        <S.HangangImg />
        <S.TempData>
          <LightSpeed right cascade>
            <p className="topText">지금 한강은</p>
          </LightSpeed>
          <Slide left>
            <p className="temp">{hangangData.temp}°C</p>
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
