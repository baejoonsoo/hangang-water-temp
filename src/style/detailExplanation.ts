import styled from "styled-components";

export const Page = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: #03005f;

  div {
    padding-top: 10vh;
    height: 90vh;
  }
`;

export const HangangImg = styled.div`
  width: 40%;
  align-items: center;
  position: relative;
  display: flex;

  img {
    margin: 0 5%;
    width: 90%;
    border-radius: 5px;
    border: 3px solid #fff;
    position: absolute;
    left: 0;
    /* top: 0; */
  }
`;

export const ContextDiv = styled.div`
  width: 60%;
`;
