import * as S from "../style/footer.ts";

const Footer = () => {
  return (
    <S.Footer>
      <S.DeveloperInfo>
        <S.DeveloperName>baejoonsoo</S.DeveloperName>
        <a href="http://github.com/baejoonsoo">
          <S.GithubIcon />
        </a>
        <a href="https://www.facebook.com/baejonsoo/">
          <S.FacebookIcon />
        </a>
      </S.DeveloperInfo>
    </S.Footer>
  );
};

export default Footer;
