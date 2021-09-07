import Electrodomesticos from "./Electrodomesticos.js";
import {Nevera} from "./nevera.js";

document.open();
let electrodomesticos= new Electrodomesticos("nacional", "A");
console.log(electrodomesticos);

document.write(electrodomesticos.calculoprecio);

const nevera= new Nevera("nacional", "B", 140);
console.log(nevera);