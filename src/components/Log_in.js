import React from 'react'
import Log_in_text from './Log_in_text'
import '../Style/style_html.css'
import Log_in_Button from './Log_in_Button'
const login = () =>{
 
}
const Log_in = (props) =>(
    <div className="Login" style={{display: props.log ? "block":"none"}}>
    <div className="log-Logo">
        <img src="/Bilder/log.png"/>
    </div>
    <div className="log-input">
       <Log_in_text first={true}/>
           
       <Log_in_text first={false}/>
    </div>
    <div className="log-Buttons">
        <Log_in_Button first={true} login={props.showLogin}/>
        <Log_in_Button first={false} login={props.showLogin}/>

    </div>
    </div>
);
export default Log_in