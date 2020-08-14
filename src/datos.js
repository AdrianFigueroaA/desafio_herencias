class datos {
    constructor()
        {

            let nombre = document.getElementById('nombreDueno').value;
            let telefono = document.getElementById('telefono').value;
            let direccion = document.getElementById('direccion').value;
            let nombreAnimal = document.getElementById('nombreAnimal').value;
            let especie = document.getElementById('especie').value;
            let enfermedad = document.getElementById('enfermedad').value

            return [nombre,telefono,direccion,nombreAnimal,especie,enfermedad]


        }
}
export default datos

