import React, { useState } from 'react';
import './App.css';
import BeerList from './BeerList';


let testBieres = [
  {
    name : "Desperados",
    id : 0
  },
  {
    name : "Corona",
    id : 0
  },
  {
    name : "Kronembourg",
    id : 0
  },
  {
    name : "Heineken",
    id : 0
  }
]

function ADD(n : string) {
  let found = false;

  testBieres.forEach(element => {
    if(element.name.toLowerCase === n.toLowerCase){
      found = true;
    }
  })

  if(!found){
    testBieres.push({name : n,id:0})
  }
  
  ;

}
 
function App() {
  const [nameState, setName] = useState("");
  return (
    <div className="App">
      La maison de la Bière <br/>
        <label htmlFor="ajout">Biere a ajouter</label><br/>
        <input type="text" id="ajout" value={nameState} onChange= {nouv => setName(nouv.target.value)} /><br/>
        <button onClick={() => ADD(nameState) }>Ajouter a la liste</button><br/>
      <BeerList beers={testBieres} />
    </div>
  );
}

export default App;