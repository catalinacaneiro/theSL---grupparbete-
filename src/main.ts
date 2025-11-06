import './style.css'
import type { SlResponse } from "./models/SlResponse";
import type { Departure } from './models/Departure';

const p = fetch("https://transport.integration.sl.se/v1/sites/1304/departures");

const app = document.getElementById("app"); 

p.then((response: Response) => response.json()).then((data:SlResponse) => {
  
  data.departures.forEach((departure: Departure) => { 
    const containerDestination = document.createElement("div");
    const titelDestination = document.createElement("h2");
    
    console.log(departure.destination);

    containerDestination.className = "departure";
    titelDestination.innerHTML = departure.destination; 

    app?.appendChild(containerDestination);
    containerDestination.appendChild(titelDestination);

  });




})

//const response = await fetch("https://transport.integration.sl.se/v1/sites/1304/departures");




