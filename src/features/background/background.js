import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getBackground } from "./backgroundSlice";

import './background.css';

export function Background() {

  const { images, imageIndex } = useSelector((state) => state.backgroundImage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBackground());
  }, [dispatch]);

  return (
    <div id='backgroundImageContainer'>
      <img id='backgroundImage' src={images[imageIndex]} alt="" ></img> 
    </div>
  )
}