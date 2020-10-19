import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent(){  
  const svgMarkup = `<svg width="246" height="57" viewBox="0 0 246 57" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M245 110C245 170.097 190.487 219 123 219C55.5133 219 1 170.097 1 110C1 49.9031 55.5133 1 123 1C190.487 1 245 49.9031 245 110Z" stroke="#3E5336" stroke-opacity="0.5" stroke-width="2"/>
  </svg>
  
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="100%" />;  

  return <SvgImage />;
}
