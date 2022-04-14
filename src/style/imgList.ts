import styled from "styled-components";
export const Page = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #03005f;
`;
export const Explanation = styled.div`
  padding: 100px 0px 40px 40px;

  h1,
  p {
    margin: 0;
  }
  h1 {
    border-bottom: 3px solid aliceblue;
    font-size: 55px;
    color: aliceblue;
  }
  p {
    font-size: 20px;
    color: aliceblue;
    margin-top: 10px;
  }
`;
export const CardList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const PhotoCard = styled.div`
  @font-face {
    font-family: "Cafe24Ssurround";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "LeferiPoint-WhiteObliqueA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  background-color: white;
  border-radius: 10px;
  padding: 60px 0 30px 0;
  display: grid;

  * {
    justify-self: center;
    margin: 0;
  }

  h1 {
    font-family: "Cafe24Ssurround";
    padding-top: 10px;
    padding-left: 10px;
    font-size: 20px;
  }

  p {
    font-family: "LeferiPoint-WhiteObliqueA";
    margin-top: 5px;
    color: #808080;
    font-weight: bold;
    font-size: 16px;
  }
`;

export const CardImg = styled.div`
  width: 390px;
  height: 180px;

  background-image: url(${({ src }: { src: string }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
