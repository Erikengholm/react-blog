import React from 'react'
import Follow_us_Row from './Follow_us_Row'
import '../Style/style_html.css'

const Follow_us = () =>(
    <div className="card">
    <h3>Följ oss!</h3>
    <p>Vi har många följare på Facebook och Twitter!</p>
    <Follow_us_Row number={1}/>
    <br></br>
    <Follow_us_Row number={2}/>
 </div>
);
export default Follow_us