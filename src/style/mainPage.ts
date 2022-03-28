import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  background-color: #03005f;
`;

export const HangangBanner = styled.div`
  background-image: url("img/hangang.jpg");
  width: 100%;
  height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: end;
  /* background-attachment: fixed; */
`;

export const Temp = styled.h1`
  position: absolute;
  bottom: -60px;
  text-align: center;
  width: 100%;
  color: white;
  font-size: 50px;
`;

export const HangangDataView = styled.div`
  position: relative;
`;
