import * as S from "../style/header.ts";
import Logo from "../img/Logo.svg";

interface props {
  station: string;
}

const Header = ({ station }: props) => {
  return (
    <S.Header>
      <S.Logo src={Logo} />
      <S.Title>
        <p className="title">지금 한강 온도는</p>
        <p className="subTitle">{station} 한강물 온도</p>
      </S.Title>
    </S.Header>
  );
};

export default Header;
