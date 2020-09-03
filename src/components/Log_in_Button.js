import React,{useContext} from 'react'
import {userContext} from './userContext';

function log_button(props) {
    const { user, setUser } = useContext(userContext);

    if(props.first){
return <div className="Log-in-Button"><button onClick={()=>setUser(document.getElementById('fname').value)}>Log in</button> </div>}

else{
return <div className="Log-in-Button"><button onClick={() => props.showLogin(false)} >Avbryt</button></div>}
}
export default log_button