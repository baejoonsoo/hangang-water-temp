import styled from "styled-components";
import githubIcon from "../img/github.png";
import facebookIcon from "../img/facebook.png";

export const Footer = styled.footer`
  height: 200px;
  background-color: #495057;
  display: flex;
  padding: 5px 30px;
  align-items: flex-end;
`;

export const DeveloperInfo = styled.div`
  border-top: 2px #fff solid;
  margin: 0px 20px 20px 20px;
  padding-top: 10px;
  width: 100%;
  justify-content: flex-end;
  display: flex;
  color: #eee;

  align-items: flex-end;
  gap: 10px;
`;

export const DeveloperName = styled.p`
  font-size: 20px;
  margin: 0;
  font-weight: bolder;
`;

export const GithubIcon = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${githubIcon});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FacebookIcon = styled(GithubIcon)`
  background-image: url(${facebookIcon});
`;
