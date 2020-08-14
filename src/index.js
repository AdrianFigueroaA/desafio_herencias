
import animal from './animal'
import datos from './datos'



document.getElementById("boton").addEventListener("click",info);
function info() 

{
   let data = new datos;
        const mascota = new animal(data[0],data[1],data[2],data[3],data[4],data[5],data[6])
        console.log(mascota)
        mascota.mostrarInfo()


        
}






