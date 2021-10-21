import styled from 'styled-components';
import px2vw from '../Utils/px2vw';
import logo2 from '../Images/logo2.png'
export const Ready = styled.div`

    background-color: white;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    padding : 30px;
    justify-content: space-between;
`;

export const Id = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Name = styled.p`
  margin-top: ${px2vw(5)};
  margin-bottom: ${px2vw(8)};
  color: #666;
  font-size: 1.5rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Logo = styled.img`
  src: url(${logo2});
  width: 64px;
  height: 7px;
`;