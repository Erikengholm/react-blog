import React from 'react'
import '../Style/style_html.css'
const Follow_us_icon = ({path ,icon}) =>(
    <div className="col">
         <a href={path}>
         <img  src={"/Bilder/"+icon} className="icon_img"/>
         </a>
    </div>
);
export default Follow_us_icon