import React from "react";
import {Name, Id, Ready, Logo} from "./ReadyStyle";

export default function ReadyCard(){
    return(
        <Ready>
            <Id>#352</Id>
            <Name>Mae Smith</Name>
            <br/>
            <hr/>
            <Logo />
            <br/>
            <hr/>
            <Name>Pickup by</Name>
            <Id>1 Min</Id>
        </Ready>
    );
}