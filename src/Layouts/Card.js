import React, {useState} from 'react';
import { Alert } from 'styled-alert-component';
import Tracker from "../Components/Cards/Tracker/Tracker";
import {CardItem, LogoSupplier, ExpandButton, BoxText,BoxTitle, ListNum, ButtonReady, ButtonCancel} from "./CardStyle";


export default function Card({boxData}) {
    const [show, setShow] =useState(false);

    return (
        <>            
            <CardItem key={boxData.id} bgColor="white">
                <div style={{ display: "flex", justifyContent:"space-between" }}>
  
                  <LogoSupplier src={boxData.logo} width={boxData.width} height={boxData.height}/>
                  <Tracker></Tracker>
                  <ExpandButton />
                </div>
              <BoxTitle>{boxData.title}</BoxTitle>
              <BoxText 
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              >{boxData.text}</BoxText>
              {show && (
                <Alert warning style={{ borderRadius:"15px" , fontSize: "12px"}}>No onion please, I’m very allergic. It would be best if no onions was handled.</Alert>
              )}
              <div style={{ display: "flex" }}>
                  <ListNum>
                      <li>x1</li>
                      <li>x1</li>
                      <li>x1</li>
                  </ListNum>
                  <ListNum>
                      <li>Americana</li>
                      <li>Mexicana</li>
                      <li>Hawaii</li>
                  </ListNum>
              </div>
              <br/>
              <hr/>
              <BoxText style={{ textAlign: "left" }}>41,00 €</BoxText>
              <ButtonReady>Ready to Deliver</ButtonReady>
              <ButtonCancel>Cancel</ButtonCancel>
            </CardItem>
          
        </>
    );
}
