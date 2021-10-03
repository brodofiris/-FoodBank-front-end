import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgComponent(){  
  const svgMarkup = `<svg width="26" height="37" viewBox="0 0 26 37" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.5981 36.7142C11.7983 36.7142 11.082 36.2986 10.6823 35.6024C10.678 35.5951 10.674 35.5877 10.6699 35.5803L1.58365 18.9165C-0.585241 14.9388 -0.52305 10.2176 1.75004 6.28713C3.97383 2.44189 7.92373 0.0926818 12.316 0.00290415C12.5037 -0.00096805 12.6923 -0.00096805 12.8798 0.00290415C17.2722 0.0926818 21.2221 2.44189 23.446 6.28713C25.7191 10.2176 25.7813 14.9388 23.6124 18.9165L14.5262 35.5803C14.5221 35.5877 14.518 35.5951 14.5138 35.6024C14.1141 36.2985 13.3979 36.7142 12.5981 36.7142ZM12.598 2.29467C12.5194 2.29467 12.4409 2.29546 12.3626 2.29704C8.77723 2.37032 5.55058 4.29201 3.73143 7.4376C1.86305 10.6684 1.81138 14.5483 3.59331 17.8162L12.598 34.3305L21.6027 17.8163C23.3846 14.5483 23.333 10.6684 21.4645 7.4376C19.6453 4.29208 16.4187 2.37032 12.8333 2.29704C12.7552 2.29546 12.6767 2.29467 12.598 2.29467Z" fill="#858585"/>
  </svg>
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="100%" />;  

  return <SvgImage />;
}