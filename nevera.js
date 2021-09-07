import Electrodomestico from "./Electrodomesticos.js";
export class Nevera extends Electrodomestico{
constructor(procedencia, consumo, capacidad){
    super(procedencia, consumo)
    this.capacidad=capacidad;
    this.precioNevera = this.calcularNevera;
}
get calcularNevera(){
    if(this.capacidad > 120){
    
        this.capacidadExcedida = parseInt((this.capacidad-120)/10);
        this.porcentajePrecio = super.calculoprecio*5/100;
        this.valorAdicional = this.capacidadExcedida*this.porcentajePrecio;
        return this.precioNevera = super.calculoprecio+this.valorAdicional; 
    }
    else{
        return super.calculoprecio;
    }

}
    



}