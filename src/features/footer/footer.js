import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getQuote } from "./footerSlice";

import './footer.css'

export function Footer() {
  
  const { quote, author } = useSelector((state) => state.footer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  return (
    <div id="footer">
      <div id="quote">
        {`"${quote}"`}
      </div>
      <div id="source">
        {`- ${author}`}
      </div>
    </div>
  )
}
