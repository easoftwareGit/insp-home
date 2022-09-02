import React, { useEffect } from "react";
// import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
// import { useSelector, useDispatch } from "react-redux/es/exports";
import './footer.css'

import { useDispatch } from 'react-redux';
import { getQuote } from "./footerSlice";

export function Footer() {
  
  const { quote, author } = useSelector((state) => state.footer);
  // const { quote, source } = useSelector((state) => state.footer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  return (
    <div id="footer">
      {/* <div id="quote" onClick={() => {dispatch(getQuote())}}>
        {`"${quote}"`}
      </div> */}
      <div id="quote">
        {`"${quote}"`}
      </div>
      <div id="source">
        {/* {`- ${source}`} */}
        {`- ${author}`}
      </div>
    </div>
  )
}
