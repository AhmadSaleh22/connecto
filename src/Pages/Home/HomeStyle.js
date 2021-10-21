import px2vw from '../../Utils/px2vw';
import styled from "styled-components";
import {Expand} from "@styled-icons/boxicons-regular/Expand"
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
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
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const Box2 = styled.div`
  display: flex;
  width: ${px2vw(200, 200)};
  min-height: ${px2vw(200, 200)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(200, 200)};
    min-height: ${px2vw(200, 200)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(200)};
    min-height: ${px2vw(200)};
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
export const ListNum = styled.ul`
  width: ${px2vw(100)};
  margin-top : 15px;
  list-style-type: none;
`;

export const ButtonReady = styled.button`
  border-radius: 15px;
  background-color: #15BBF9;
  color : white;
  height: ${px2vw(50)};
  border : solid;
`;

export const ButtonCancel = styled.button`
  color : #FA432A;
  margin-top : 15px;
  background-color: transparent;
  border : none;
`;

export const ExpandButton = styled(Expand)`
  color: #15BBF9;
  width : 25px;
  height: 25px;
  text-align : right;
`