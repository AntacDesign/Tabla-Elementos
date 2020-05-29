/* toma todos los elementos que tengan la misma clase */
const botones = document.querySelectorAll(".btn-element");

/* creando la funcion */
const seleccionado = function (evento) {
    /*Este obtine la clases */
    let clases = this.className;
    /*Este obtine por clase */
    let clase = this.classList[1];
    /*Este obtine el id */
    let id = this.id;
    /*Este obtine el contenido del elemento */
    let contenido = this.innerText;
    /*salida en la consola */
    console.log("el texto seleccionado es: " + id)
    document.getElementById(id).classList.toggle("seleccionado");
    document.getElementById("elemento").classList.toggle(clase);
}

/* dando evento a la contante boton */
botones.forEach(boton => {
    boton.addEventListener("click", seleccionado)
}
);