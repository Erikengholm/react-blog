import React from "react";
import Car_list from './Car_list'
import '../Style/style_html.css'

const App = () => (
   <div id="backcover">
   <div id="aaa">
      <button onClick="newpage()" id="leftblogMenyBox" className="blogMenyBox">
         <p> <b><u>Home</u></b></p>
      </button>
      <button id="meny-button-2" onClick="newpage()" className="blogMenyBox">
         <p> Catagories</p>
      </button>
      <button id="meny-button-3" onClick="newpage()" className="blogMenyBox" >
         <p> arkivet</p>
      </button>
      <button  id="meny-button-4" onClick="newpage()" className="blogMenyBox">
         <p> om oss</p>
      </button>
      <button onClick="ph()" id="rightblogMenyBox" className="blogMenyBox">
         <p> sortera </p>
      </button>
   </div>
   <header>
      <h1>Eriks blogg</h1>
   </header>
   <div className="container-fluid">
      <div className="row">
       <Car_list/>
         <div className="högerKollumn">
            <div className="card">
               <h2>Om Oss</h2>
               <img src="Bilder\man_i_bil.jpg" alt="oss"/>
            </div>
            <div className="card">
               <h3>Bilar 2020</h3>
               <img src="Bilder\lamborgini.jpg" alt="populära"/>
            </div>
            <div className="card">
               <h3>Följ oss!</h3>
               <p>Vi har många följare på Facebook och Twitter!</p>
               <div className="row">
                  <div className="col">
                     <a href="https://www.youtube.com//"/>

                     <img src="Bilder\Youtube.png"/>
                  </div>
                  <div className="col"> 
                     <a href="https://www.twitter.com/"/>

                     <img src="Bilder\twitter.png"/>
                  </div>
                  <div className="col">
                    <a href="https://www.facebook.com/"/>
                     <img src="Bilder\facebook.png" />
                  </div>
               </div>
               <br></br>
               <div className="row">
                  <div className="col">   
                     <a href="https://www.instagram.com/"/>
                     <img src="Bilder\insta.png"/>
                  </div>
                  <div className="col"> 
                     <a href="https://www.gmail.com/"/>
                     <img src="Bilder\gmail.jpg"/>
                  </div>
                  <div className="col">
                     <a href="https://www.reddit.com/"/>                                                   
                     <img src="Bilder\reddit.jpg"/>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
<footer>
   <h2>Footer</h2>
</footer>
</div>
);
export default App;
