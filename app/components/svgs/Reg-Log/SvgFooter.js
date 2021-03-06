import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent(){  
  const svgMarkup = `<svg width="381" height="78" viewBox="0 0 381 78" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M169 34.1763C44.521 -19.5001 16.3333 7.70954 0 33.4999V58.9998C0 75.0311 16.5 77.9998 19 77.9998C137.673 77.9995 358.143 77.9998 362 77.9998C370.521 77.9999 381 69.9999 381 58.9998V0C313 66.4259 191.083 43.6988 169 34.1763Z" fill="#89A97D"/>
  </svg>  
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="100%" />;  

  return <SvgImage />;
}
