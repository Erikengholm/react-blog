import React from 'react'

function text(props) {
    console.log(props.first);
if(props.first){
return <div className="Log-in-text"> <input type="text" id="fname" name="fname" placeholder="användare namn"/></div>}

else{
return <div className="Log-in-text">  <input type="password" id="lname" name="lname" placeholder="lösenord"/></div>}
}

export default text