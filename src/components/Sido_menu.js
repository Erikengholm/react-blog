import React from 'react'
import Sido_menu_holder from './Sido_menu_holder'
import Follow_us from './follow_us'
import '../Style/style_html.css'

const Sido_menu = () =>(
    <div className="högerKollumn">
        <Sido_menu_holder number={1} />

        <Sido_menu_holder number={2}/>
        <Follow_us/>
         </div>
)
export default Sido_menu