import React from "react";
import { useDispatch } from 'react-redux';
import { getNextImage } from "./backgroundSlice";
import './background.css';

// const NextImageButton = () => {
//   const dispatch = useDispatch();

//   return (
//     <div id="right" className="buttonContainer">
//       <button
//         id="nextButton"
//         className="arrowButton"
//         onClick={() => {
//           dispatch(getNextImage());
//         }}
//       >
//         {">"}
//       </button>
//     </div>
//   )
// }

// export default NextImageButton;

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
