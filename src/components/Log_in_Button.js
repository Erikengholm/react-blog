import React from 'react'
function log_button(props) {
    console.log(props.first);
if(props.first){
return <div className="Log-in-Button"><button onClick={props.showLogin}>Log in</button> </div>}

else{
return <div className="Log-in-Cancel"><button onClick={() => props.showLogin(false)}>Avbryt</button></div>}
}
export default log_button