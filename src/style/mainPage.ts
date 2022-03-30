import background from "../img/hangang.jpg";
import styled from "styled-components";

export const Page = styled.main`
  height: auto;
  background-color: #03005f;
`;

export const TempData = styled.div`
  width: auto;
  position: absolute;
  top: 0;
  left: 0;
  margin: 250px 50px 0px 50px;

  p {
    color: white;
  }

  .topText {
    font-weight: bold;
    font-size: 25px;
    margin: 0;
  }

  .temp {
    margin: 0;
    font-size: 70px;
    font-weight: bolder;
    width: 400px;
    border-bottom: #f0f0f0 0.5px solid;
  }

  .time {
    display: flex;
    justify-content: end;
  }

  .time p {
    justify-self: end;
  }
`;

export const HangangTempData = styled.div`
  position: relative;
`;

export const HangangImg = styled.div`
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: end;
  filter: brightness(60%);
`;

export const Header = styled.header`
  height: 80px;
  width: 100vw;
  margin-left: 10px;
  display: flex;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Logo = styled.img`
  height: 70%;
`;

export const Title = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  p {
    margin: 0;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .subTitle {
    font-size: 12px;
    color: #b0b0b0;
    font-weight: 600;
  }
`;
