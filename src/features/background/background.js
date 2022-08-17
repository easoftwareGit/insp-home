import React from "react";
// import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
// import { useSelector, useDispatch } from "react-redux/es/exports";
// import { allBGImages } from './localdata';
import './background.css';

export function Background() {

  const { images, imageIndex } = useSelector((state) => state.backgroundImage);
  // const dispatch = useDispatch();

  return (
    <div id='backgroundImageContainer'>
      <img id='backgroundImage' src={images[imageIndex]} alt="" ></img> 
    </div>
  )
}