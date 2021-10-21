import React from 'react';
import {Notifications} from "@styled-icons/ionicons-sharp/Notifications";
import { Container } from '../../Pages/Home/HomeStyle';
import {UserName, Logo, Date, LogoName} from './NavbarStyle';
import Menu from "./Menu";
export default function Navbar(){
    return(
        <>
        <div style={{marginTop: "15px",marginLeft:"10px", marginRight:"10px", display:"flex", justifyContent:"space-between", flexWrap:"wrap" , maxWidth: "100%"}}>
            <Date>Jul 31, 2021 </Date>
            <LogoName>Connecto</LogoName>
            <div style={{ display: "flex", justifyContent:"space-between" }}>
                <Notifications style={{marginRight:"8px"}} color='#6F7070'/>
                <UserName>M</UserName>
            </div>
        </div>
        <br/>
            <hr/>
            <br/>
            <br/>
            <Menu/>
        </>
    );
}
