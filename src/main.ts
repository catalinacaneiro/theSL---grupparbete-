import './style.css'
import type { SlResponse } from "./models/SlResponse";

const p = fetch("https://transport.integration.sl.se/v1/sites/1304/departures");

p.then((response: Response) => Response.json()).then((data: SlReponse) => {
    console.log
}) 

const data: SlResponse = await response.json();

console.log(p);

