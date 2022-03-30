import styled from "styled-components";

export const Header = styled.header`
  height: 80px;
  width: 100vw;
  padding-left: 10px;
  display: flex;
  align-items: center;

  background-color: rgba(40, 40, 40, 0.5);

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
    color: #dedede;
    font-weight: 600;
  }
`;
