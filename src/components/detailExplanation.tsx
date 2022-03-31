import * as S from "../style/detailExplanation";
import hangang from "../img/hangang.jpeg";
import Fade from "react-reveal/Fade";

const DetailExplanation = () => {
  return (
    <S.Page>
      <S.HangangImg>
        <Fade right big>
          <img src={hangang} alt="한강 이미지" />
        </Fade>
      </S.HangangImg>
      <S.ContextDiv></S.ContextDiv>
    </S.Page>
  );
};

export default DetailExplanation;
