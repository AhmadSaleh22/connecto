import React, {useState} from "react";
import Tracker from "../Components/Cards/Tracker/Tracker";
import { Container,Box, BoxTitle, BoxText,Box2, ListNum, ButtonReady, ButtonCancel, LogoSupplier, ExpandButton } from "../Pages/Home/HomeStyle";
import { Alert } from 'styled-alert-component';
import Card from "./Card";
import ClosedCard from "./ClosedCard";
import logo1 from '../Images/logo1.png';
import logo2 from '../Images/logo2.png';
const lorem =
  "+358414361234";

const data = [
  {
    id: Math.random(),
    title: "#326  Leandro M.",
    text: lorem,
    bgColor: "#F7F7F7",
    logo : logo1, 
    width : "40px",
    height: "40px" 
  },
  {
    id: Math.random(),
    title: "#327  Sam A.",
    text: lorem,
    bgColor: "#F7F7F7",
    logo : logo2,
    width : "60px",
    height: "8px"
  }
];

export default function Layout() {
    return (
      <Container>
        <Box bgColor="#F7F7F7">
            <BoxTitle>Incoming 1</BoxTitle>
            <Card boxData={data[0]}/>
            <Card boxData={data[0]}/>
        </Box>
        <Box bgColor="#F7F7F7">
            <BoxTitle>Outgoing 1</BoxTitle>
            <Card boxData={data[1]}/>
            <ClosedCard bgColor="white"/>
        </Box>
        <Box2 bgColor="#EDA9A9">
        <BoxTitle>Ahmad Saleh</BoxTitle>
          <BoxText>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.
          </BoxText>
        </Box2>
      </Container>
    );
  }
  