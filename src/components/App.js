import React,{useState} from "react";
import Car_list from './Car_list'
import '../Style/style_html.css'
import Menu from './Menu'
import Sido_menu from './Sido_menu'
import Container from 'react-bootstrap/Container';
import Login from './Log_in' 
import Log_in from "./Log_in";
const App = () => {
   const [loggedIn, setLogin] = useState(false)

   if(loggedIn){
      document.getElementById('backcover').style.filter = 'blur(5px)'
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
  <Log_in log={loggedIn}/>

</div>
);}
export default App;
