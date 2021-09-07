import Electrodomesticos from "./Electrodomesticos.js";
import {Nevera} from "./nevera.js";
import Tv from "./tv.js";

document.open();
let electrodomesticos= new Electrodomesticos("nacional", "A");
console.log(electrodomesticos);

document.write("El electrodomestico cuesta " + electrodomesticos.calculoprecio + " y ");

const nevera= new Nevera("nacional", "B", 140);
console.log(nevera);
document.write("la nevera cuesta" + nevera.precioNevera);

const tv= new Tv("nacional", "B", 50,true);
console.log(tv);