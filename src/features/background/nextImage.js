import React from "react";
import { useDispatch } from 'react-redux';
import { getNextImage } from "./backgroundSlice";
import './background.css';

export function NextImage() {

  const dispatch = useDispatch();
  return (
    <div id='right' className="buttonContainer">        
      <button 
        className='arrowButton'
        id='nextButton'
        onClick={() => {dispatch(getNextImage)}}
      >
        &gt;
      </button>        
    </div>
  )
}
