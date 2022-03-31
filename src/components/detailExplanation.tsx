import * as S from "../style/detailExplanation";
import hangang from "../img/hangang.jpeg";
import { useEffect, useRef } from "react";

const DetailExplanation = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", (e: any) => {
      const value = window.scrollY - window.innerHeight + 10;

      if (imgRef && imgRef.current) {
        imgRef.current.style.left = value + "px";
      }
    });
  }, []);

  return (
    <S.Page>
      <S.HangangImg>
        <img src={hangang} ref={imgRef} alt="한강 이미지" />
      </S.HangangImg>
      <S.ContextDiv></S.ContextDiv>
    </S.Page>
  );
};

export default DetailExplanation;
