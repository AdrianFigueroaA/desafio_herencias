import persona from './persona'


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
        return  document.getElementById("lista").innerHTML+=`<h1>Lista Pacientes</h1>
                                                            <p>Nombre : ${this.nombre}</p>
                                                            <p> Telefono :${this.telefono}</p>
                                                            <p> Direccion :${this.direccion}</p>
                                                            <p> Nombre Animal :${this.nombreAnimal}</p>
                                                            <p> Especie :${this.especie}</p>
                                                            <p>Enfermedad :${this.enfermedad}</p>` 
                   
}
}
export default animal