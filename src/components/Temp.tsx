import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "../style/mainPage";
import Logo from "../img/Logo.svg";

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
      <S.Header>
        <S.Logo src={Logo} />
        <S.Title>
          <p className="title">지금 한강 온도는</p>
          <p className="subTitle">{hangangData.station} 한강물 온도</p>
        </S.Title>
      </S.Header>
      <S.HangangTempData>
        <S.HangangImg />
        <S.TempData>
          <p className="topText">지금 한강은</p>
          <p className="temp">{hangangData.temp}°C</p>
          <div className="time">
            <p>{hangangData.time}</p>
          </div>
        </S.TempData>
      </S.HangangTempData>
    </S.Page>
  );
}

export default Temp;
