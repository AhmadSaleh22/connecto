import styled from "styled-components";
import connecto2 from "../../Images/connecto2.png";

export const Logo = styled.img`
  src: url(${connecto2});
`;
export const LogoName = styled.h3`
    color : #D7203C;
    font-size: 1.5rem;
    text-align: center;
`;
export const UserName = styled.div`
    text-align : center ;
    border-radius : 50%;
    justify-content: center;
    width : 60px;
    padding : 15%;
    color : #3377FF;
    height: 40px;
    background-color: #D6E4FF;

`;

export const Date = styled.p`
    color: #666;
    font-size: 1rem;
`