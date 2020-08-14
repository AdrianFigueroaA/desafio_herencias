document.getElementById("boton").addEventListener("click", mostrar);

function datos() {
  let nombre = document.getElementById('nombreDueno').value;
  let telefono = document.getElementById('telefono').value;
  let direccion = document.getElementById('direccion').value;
  let nombreAnimal = document.getElementById('nombre_animal').value;
  let especie = document.getElementById('especie').value;
  let enfermedad = document.getElementById('enfermedad').value;
  return [nombre, telefono, direccion, nombreAnimal, especie, enfermedad];
}

class persona {
  constructor(nombre, telefono, direccion) {
    this.nombreDueno = nombre, this.telefono = telefono, this.direccion = direccion;
  }

}

class animal extends persona {
  constructor(nombreDueno, telefono, direccion, nombreAnimal, especie, enfermedad) {
    super(nombreDueno, telefono, direccion);
    this.nombreAnimal = nombreAnimal, this.especie = especie, this.enfermedad = enfermedad;
  }

  mostrarInfo() {
    return document.getElementById("titulo").innerHTML = "Lista Pacientes", document.getElementById("l1").innerHTML = `Nombre : ${this.nombreDueno}`, document.getElementById("l2").innerHTML = `Telefono :${this.telefono}`, document.getElementById("l3").innerHTML = `Direccion :${this.direccion}`, document.getElementById("l4").innerHTML = `Nombre Animal :${this.nombreAnimal}`, document.getElementById("l5").innerHTML = `Especie :${this.especie}`, document.getElementById("l6").innerHTML = `Enfermedad :${this.enfermedad}`;
  }

}

function mostrar() {
  const mascota = new animal(datos()[0], datos()[1], datos()[2], datos()[3], datos()[4], datos()[5]);
  mascota.mostrarInfo();
}