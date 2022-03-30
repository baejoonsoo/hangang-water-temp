import * as S from "../style/header.ts";

const Header = () => {
  return (
    <S.Header>
      <S.Logo src={Logo} />
      <S.Title>
        <p className="title">지금 한강 온도는</p>
        <p className="subTitle">{hangangData.station} 한강물 온도</p>
      </S.Title>
    </S.Header>
  );
};

export default Header;
