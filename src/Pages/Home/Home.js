import React, {useState} from "react";
import Layout from "../../Layouts/Layout";
import Global from "../../Styles/global";
import logo1 from '../../Images/logo1.png';
import logo2 from '../../Images/logo2.png';
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

export default function Home() {
  return (
    <>
      <Global />
      <Layout boxData={data} />
    </>
  );
}
