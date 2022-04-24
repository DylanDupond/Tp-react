import * as React from 'react';
import Beer from "./Interfaces";

interface BeerProp {
    beers : Beer[]
}

const BeerItem: React.FC<Beer>=({name,id}: Beer)=> {
    return <div>
    <li> {id + " - " + name} </li>
    </div>
}

const BeerList : React.FC<BeerProp> =({beers}: BeerProp) =>{
    return (<div>
        <ul>
            {beers.map(bieres => {
                return <div key={beers.indexOf(bieres)}>
                    <BeerItem name ={bieres.name}
                                 id = {beers.indexOf(bieres)}  />
                                 <button onClick={()=>beers.splice(beers.indexOf(bieres),1)}> X</button>
                </div>
            })} 
        </ul>
    </div>)
}

export default BeerList