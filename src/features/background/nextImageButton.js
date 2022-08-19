import React from "react";
import { useDispatch } from 'react-redux';
import { getNextImage } from "./backgroundSlice";
import './background.css';

export function NextImageButton() {
  const dispatch = useDispatch();

  return (
    <div id='right' className="buttonContainer">        
      <button 
        className='arrowButton'
        id='nextButton'
        onClick={() => {dispatch(getNextImage())}}
      >
        {">"}        
      </button>        
    </div>
  )
}
