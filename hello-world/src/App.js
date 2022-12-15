
import React from 'react';
import ReactDOM from 'react-dom';


function NavBar() {
  return (
    <h1> React App works and components tested! :) </h1>
  )
}

function SecondComponent() {
  return (
    <h3>second component!</h3>
  )
}

function App(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<div>
                <NavBar />
                <SecondComponent />
                <h2>Lets reuse the component with different code.</h2>
                <SecondComponent></SecondComponent>
                <h3>Normally injected HTML</h3>
              </div>);
  

  // const h1 = document.createElement("h1");
  // h1.textContent = "imperative way to program in js";
  // h1.className = "header";
  // var root = document.getElementById("root");
  // root.appendChild("h1");
  
}

export default App;


