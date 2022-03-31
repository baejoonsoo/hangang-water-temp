import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/\bheader";
import DetailExplanation from "./components/detailExplanation";
import Temp from "./components/Temp";
import { hangangDataType } from "./interface/hangangData";

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
    <div>
      <Header station={hangangData.station} />
      <div id="temp">
        <Temp hangangData={hangangData} />
      </div>
      <div id="explanation">
        <DetailExplanation />
      </div>
    </div>
  );
}

export default App;
