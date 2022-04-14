import * as S from "../style/imgList.ts";
import hgPhoto1 from "../img/hgPhoto1.jpg";
import hgPhoto2 from "../img/hgPhoto2.jpg";
import hgPhoto3 from "../img/hgPhoto3.jpg";

const cardData: { url: string; title: string; text: string }[] = [
  {
    url: hgPhoto1,
    title: "한강공원",
    text: "한강의 아름다움",
  },
  {
    url: hgPhoto2,
    title: "한강의 겨울",
    text: "얼어붙은 한강 속 작은 길",
  },
  {
    url: hgPhoto3,
    title: "한강의 야경",
    text: "석양 속 도시와 어우러진 한강",
  },
];

const ImgList = () => {
  return (
    <S.Page>
      {cardData.map((data) => (
        <S.PhotoCard>
          <p>{data.title}</p>
          <S.CardImg src={data.url} />
        </S.PhotoCard>
      ))}
    </S.Page>
  );
};
export default ImgList;
