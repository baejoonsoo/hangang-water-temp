import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./style/mainPage";

interface hangangDataType {
  temp: string;
  time: string;
  station: string;
  status: string;
  type: string;
}

function App() {
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
      <S.HangangDataView>
        <S.HangangBanner></S.HangangBanner>
        <S.Temp>{hangangData.temp}°C</S.Temp>
      </S.HangangDataView>
    </S.Page>
  );
}

export default App;
