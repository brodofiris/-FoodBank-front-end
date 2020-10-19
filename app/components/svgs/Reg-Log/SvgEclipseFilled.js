import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent(){  
  const svgMarkup = `<svg width="242" height="101" viewBox="0 0 242 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="33" cy="-33" rx="209" ry="134" fill="#FF6D76"/>
  </svg>  
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="100%" />;  

  return <SvgImage />;
}
