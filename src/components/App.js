import React from "react";
import Car_list from './Car_list'
import '../Style/style_html.css'
import Menu from './Menu'
import Sido_menu from './Sido_menu'
import Container from 'react-bootstrap/Container'
const App = () => (
   <div id="backcover">
      <Menu/>
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
);
export default App;
