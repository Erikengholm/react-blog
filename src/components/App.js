import React, { useState, useContext } from "react";
import Car_list from './Car_list'
import '../Style/style_html.css'
import Menu from './Menu'
import Sido_menu from './Sido_menu'
import Container from 'react-bootstrap/Container';
import Log_in from "./Log_in";
import {userContext} from './userContext';

const App = () => {
   const [loggedIn, setLogin] = useState()
   const [user, setUser] = useState("guest")

   const value = { user, setUser };
   const contextvalue = useContext(userContext)

   if(loggedIn){
      document.getElementById('backcover').style.filter = 'blur(5px)'
   }
   else if (loggedIn == false){
      document.getElementById('backcover').style.filter = 'blur(0px)'
   }
return (
   <div>       
       <userContext.Provider value={value}>


   <div id="backcover">
      <Menu showLogin={setLogin} />
   <header>
      <h1>{user} blogg</h1>
   </header>
   <Container>
      <div className="row">
         
         <Car_list/>

         <Sido_menu/>
      </div>
   </Container>
<footer>
   <h2>Footer</h2>
</footer>

</div> 
  <Log_in log={loggedIn} showLogin={setLogin}/>

  </userContext.Provider>
</div>
);}
export default App;
