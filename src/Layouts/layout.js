import React, {useState} from "react";
import Tracker from "../Components/Cards/Tracker/Tracker";
import { Container,Box, BoxTitle, BoxText,Box2, ListNum, ButtonReady, ButtonCancel, LogoSupplier, ExpandButton } from "../Pages/Home/HomeStyle";
import { Alert } from 'styled-alert-component';


export default function Layout({ boxData }) {
    const [show, setShow] =useState(false);
    return (
      <Container>
        {boxData.map(box => (
            
          <Box key={box.id} bgColor={box.bgColor}>
              <div style={{ display: "flex", justifyContent:"space-between" }}>

                <LogoSupplier src={box.logo} width={box.width} height={box.height}/>
                <Tracker></Tracker>
                <ExpandButton />
              </div>
            <BoxTitle>{box.title}</BoxTitle>
            <BoxText 
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            >{box.text}</BoxText>
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
          </Box>
        ))
        }
        <Box2 bgColor="#EDA9A9">
        <BoxTitle>Ahmad Saleh</BoxTitle>
          <BoxText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.
          </BoxText>
        </Box2>
      </Container>
    );
  }
  