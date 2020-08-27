import React from "react";
import CARS from './car_holder'
import 'C:/Users/Erik Engholm/Documents/webpro/react-blog/src/DataBase/Database.js'
import 'C:/Users/Erik Engholm/Documents/webpro/react-blog/src/Style/style_html.css';
const App = () => (
   <div id="backcover">
   <div id="aaa">
      <button onClick="newpage()" id="leftblogMenyBox" class="blogMenyBox">
         <p> <b><u>Home</u></b></p>
      </button>
      <button id="meny-button-2" onClick="newpage()" class="blogMenyBox">
         <p> Catagories</p>
      </button>
      <button id="meny-button-3" onClick="newpage()" class="blogMenyBox" >
         <p> arkivet</p>
      </button>
      <button  id="meny-button-4" onClick="newpage()" class="blogMenyBox">
         <p> om oss</p>
      </button>
      <button onclick="ph()" id="rightblogMenyBox" class="blogMenyBox">
         <p> sortera </p>
      </button>
   </div>
   <header>
      <h1>Eriks blogg</h1>
   </header>
   <div class="container-fluid">
      <div class="row">
         <div id="Main-Content" class="vänsterKollumn">
           <CARS/>
         </div>
         <div class="högerKollumn">
            <div class="card">
               <h2>Om Oss</h2>
               <img src="Bilder\man_i_bil.jpg" alt="oss"/>
            </div>
            <div class="card">
               <h3>Bilar 2020</h3>
               <img src="Bilder\lamborgini.jpg" alt="populära"/>
            </div>
            <div class="card">
               <h3>Följ oss!</h3>
               <p>Vi har många följare på Facebook och Twitter!</p>
               <div class="row">
                  <div class="col">
                     <a href="https://www.youtube.com//"/>

                     <img src="Bilder\Youtube.png"/>
                  </div>
                  <div class="col"> 
                     <a href="https://www.twitter.com/"/>

                     <img src="Bilder\twitter.png"/>
                  </div>
                  <div class="col">
                    <a href="https://www.facebook.com/"/>
                     <img src="Bilder\facebook.png" />
                  </div>
               </div>
               <br></br>
               <div class="row">
                  <div class="col">   
                     <a href="https://www.instagram.com/"/>
                     <img src="Bilder\insta.png"/>
                  </div>
                  <div class="col"> 
                     <a href="https://www.gmail.com/"/>
                     <img src="Bilder\gmail.jpg"/>
                  </div>
                  <div class="col">
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
