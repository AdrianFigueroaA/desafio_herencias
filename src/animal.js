import persona from './persona'
import datos from './datos'

class animal extends persona
{
    constructor(nombre,telefono,direccion,nombreAnimal,especie,enfermedad)
    {
        super(nombre,telefono,direccion,nombreAnimal,especie,enfermedad)


        this.nombreAnimal = nombreAnimal,
        this.especie = especie,
        this.enfermedad = enfermedad
     
        
    }
    mostrarInfo()
        {
            return  document.getElementById("titulo").innerHTML= "Lista Pacientes",
                    document.getElementById("l1").innerHTML=`Nombre : ${this.nombre}`,
                    document.getElementById("l2").innerHTML=`Telefono :${this.telefono}`,
                    document.getElementById("l3").innerHTML=`Direccion :${this.direccion}`,
                    document.getElementById("l4").innerHTML=`Nombre Animal :${this.nombreAnimal}`,
                    document.getElementById("l5").innerHTML=`Especie :${this.especie}`,
                    document.getElementById("l6").innerHTML=`Enfermedad :${this.enfermedad}`
         }
}
export default animal