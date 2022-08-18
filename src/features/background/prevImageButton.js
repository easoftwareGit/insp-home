import React from "react";
import { useDispatch } from 'react-redux';
import { getPrevImage } from "./backgroundSlice";
import './background.css';

export function PrevImageButton() {
  const dispatch = useDispatch();

  return (
    <div id="left" className="buttonContainer">
      <button 
        className='arrowButton'
        id='prevButton'
        onClick={() => {dispatch(getPrevImage())}}
      >
        {"<"}        
      </button>
    </div>
  )
}