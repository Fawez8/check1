import React from 'react';
import photo from './mario_PNG55';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         
        <div style={{border:'solid 1px black', mawWidth: 100}}>  
 
          <h1 className="title red">Your name here</h1>  

              <br>  

               <img src="/image/1111.png"/> 
              
              </br>
       
              <br> 

               <img src={photo} />  

               </br>

        </div>  

               <video width='320' height='240' controls>  

               <source src='myVideo.mp4' type='video/mp4'> 

              </video> 

      </header>
    </div>
  );
}

export default App;
