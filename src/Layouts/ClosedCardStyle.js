import px2vw from '../Utils/px2vw';
import styled from "styled-components";
import {Expand} from "@styled-icons/boxicons-regular/Expand";
export const CardItem = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(30)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    min-height: ${px2vw(110)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(5)};
  margin-bottom: ${px2vw(8)};
  color: #666;
  font-size: 1.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const LogoSupplier = styled.img`
  src: url(${props => props.src});
  width: ${props => props.width};
  height: ${props => props.height};
`;
