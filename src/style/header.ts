import styled from "styled-components";

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
