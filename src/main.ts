import './style.css'

import type { SlResponse } from "./models/slResponse"

const response = await fetch("https://transport.integration.sl.se/v1/sites/1304/departures");
const data: SlResponse = await response.json();


