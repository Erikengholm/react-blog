import React from "react";
import CARS from './car_holder'
import '../Style/style_html.css'

const Car_list  = () => (
    <div id="Main-Content" class="vänsterKollumn">
    <CARS number={0}/>
    <CARS number={1}/>
    <CARS number={2}/>
    </div>
);

export default Car_list

