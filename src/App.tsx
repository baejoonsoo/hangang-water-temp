import axios from "axios";
import { useEffect, useState } from "react";

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

  return <div>{hangangData.temp}</div>;
}

export default App;
