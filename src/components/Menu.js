import React from 'react'
import MenuButton from './MenuButton'
import '../Style/style_html.css'

const Menu = (props) =>(
<div id="aaa">
      <MenuButton number={1}/>
      <MenuButton number={2}/>
      <MenuButton number={3}/>
      <MenuButton number={4}/>
      <MenuButton number={5} showLogin={props.showLogin}/>

   </div>
);
export default Menu 