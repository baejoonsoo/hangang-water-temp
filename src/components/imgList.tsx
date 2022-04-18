import * as S from "../style/imgList.ts";
import hgPhoto1 from "../img/hgPhoto1.jpg";
import hgPhoto2 from "../img/hgPhoto2.jpg";
import hgPhoto3 from "../img/hgPhoto3.jpg";
import Slide from "react-reveal/Slide";
import { useState } from "react";
import { Link } from "react-router-dom";

interface cardDataType {
  img: string;
  title: string;
  text: string;
  url: string;
}

const cardData: cardDataType[] = [
  {
    img: hgPhoto1,
    title: "한강공원",
    text: "한강의 아름다움",
    url: "https://hangang.seoul.go.kr",
  },
  {
    img: hgPhoto2,
    title: "한강의 겨울",
    text: "얼어붙은 한강 속 작은 길",
    url: "https://mediahub.seoul.go.kr/archives/2003717",
  },
  {
    img: hgPhoto3,
    title: "한강의 야경",
    text: "석양 속 도시와 어우러진 한강",
    url: "https://seoulsky.lotteworld.com/ko/intro/intro.do",
  },
];

const ImgList = () => {
  return (
    <S.Page>
      <S.Explanation>
        <h1>EXPLANATION</h1>
        <p>
          한강은 한반도 중부에 위치한 강으로, 대한민국의 국가 1급 하천 입니다.
        </p>
      </S.Explanation>
      <Slide bottom cascade>
        <S.CardList>
          {cardData.map((data, i) => (
            <Card data={data} key={i} />
          ))}
        </S.CardList>
      </Slide>
    </S.Page>
  );
};

const Card = ({ data }: { data: cardDataType }) => {
  const [hoverImgHidden, setHoverImgHidden] = useState<boolean>(true);

  const mouseEnter = () => {
    console.log("enter");
    setHoverImgHidden(false);
  };

  const mouseLeave = () => {
    setHoverImgHidden(true);
  };

  return (
    <a href={data.url} style={{ textDecoration: "none" }}>
      <S.PhotoCard>
        <S.CardImg
          src={data.img}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        ></S.CardImg>
        <h1>{data.title}</h1>
        <p>{data.text}</p>
        <S.HoverImg isHidden={hoverImgHidden} />
      </S.PhotoCard>
    </a>
  );
};
export default ImgList;
