import styled from "styled-components";

export const Page = styled.main`
  height: auto;
  background-color: #03005f;
`;

export const TempData = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  margin: 200px 50px;

  .topText {
    color: white;
    font-weight: bold;
    font-size: 25px;
    margin: 0;
  }
  .temp {
    margin: 0;
    color: white;
    font-size: 70px;
    font-weight: bolder;
    width: 40%;
    border-bottom: #f0f0f0 0.5px solid;
  }
`;

export const HangangTempData = styled.div`
  position: relative;
`;

export const HangangImg = styled.div`
  height: 100vh;
  background-image: url("img/hangang.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: end;
  filter: brightness(60%);
`;
