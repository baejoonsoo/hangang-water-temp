import styled from "styled-components";
export const Page = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: #03005f;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const PhotoCard = styled.div`
  background-color: white;
`;

export const CardImg = styled.div`
  /* background-color: red; */
  width: 390px;
  height: 180px;

  background-image: url(${({ src }: { src: string }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
