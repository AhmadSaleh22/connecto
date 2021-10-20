import React from "react";
import Tracker from "../../Components/Cards/Tracker/Tracker";

import { Container, Box, BoxTitle, BoxText,Box2 } from "./HomeStyle";

export default function Home({ boxData }) {
  return (
    <Container>
      {boxData.map(box => (
          
        <Box key={box.id} bgColor={box.bgColor}>
        <Tracker></Tracker>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
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
