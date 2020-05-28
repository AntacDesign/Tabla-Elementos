const botones = document.querySelectorAll(".btn-element");

const seleccionado = function(evento)
{
    let clase = this.className;
    let id = this.id;
    let contenido = this.innerText;
    console.log("el texto seleccionado es: " + id)
}

botones.forEach(boton =>
    {
        boton.addEventListener("click",seleccionado)
    }
);