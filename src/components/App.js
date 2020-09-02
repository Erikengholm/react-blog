import React,{useState} from "react";
import Car_list from './Car_list'
import '../Style/style_html.css'
import Menu from './Menu'
import Sido_menu from './Sido_menu'
import Container from 'react-bootstrap/Container';
import Log_in from "./Log_in";
const App = () => {
   const [loggedIn, setLogin] = useState()

   if(loggedIn){
      document.getElementById('backcover').style.filter = 'blur(5px)'
   }
   else if (loggedIn == false){
      document.getElementById('backcover').style.filter = 'blur(0px)'
   }
return (
   <div>
   <div id="backcover">
      <Menu showLogin={setLogin} />
   <header>
      <h1>Eriks blogg</h1>
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

</div>
);}
export default App;
