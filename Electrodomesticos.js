
export default class Electrodomestico{
    constructor(procedencia, consumo){
        this.procedencia = procedencia;
        this.consumo = consumo;
    
        this.precio = this.calculoprecio;
    }

    precioProcedencia(){
        // if(this.procedencia === "nacional"){
        //     procedencia = 250000; 
        // }else {
        //     procedencia = 350000;
        // }
        return (this.procedencia ==="nacional") ? 250000 : 350000;
    }

    precioConsumo(){
        switch(this.consumo){
            case "A":
                return 450000;
            case "B":
                return 350000;
            case "C":
                return 250000;
            default:
                return 0; 
            
        }
    }

    calcularPrecioBase(){
        return this.precioProcedencia() + this.precioConsumo();
        
    }

    get calculoprecio(){
        return this.calcularPrecioBase();
    }
}
