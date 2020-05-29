/* toma todos los elementos que tengan la misma clase */
const botones = document.querySelectorAll(".btn-element");

function elimnarAnterior()
{
    rmSelect();
    rmelemt();
    rmgrupo();
}
function rmSelect()
{
    const select = document.querySelectorAll(".seleccionado");
    if(select.length >= 1)
    {
        for (var i = 0; i<select.length; i++) 
        {
        select[i].classList.remove("seleccionado");
        }
    }
 }
function rmelemt()
{   
    const select = document.getElementById("elemento");
    let grupo= select.classList[1];
    select.classList.remove(grupo);
 }

function rmgrupo()
{
    const select = document.querySelectorAll(".grupo-seleccionado");
    if(select.length >= 1)
    {
        for (var i = 0; i<select.length; i++) 
        {
        select[i].classList.remove("grupo-seleccionado");
        }
    }
 }
 
/* creando la funcion */
const seleccionado = function (evento) {
    
    elimnarAnterior();
    
    /*Este obtine por clase */
    let clase = this.classList[1];
    
    /*Este obtine el id */
    let id = this.id;

    /*salida en la consola */
    console.log("el texto seleccionado es: " + clase)
    
    /* seleccionado elemento */
    document.getElementById(id).classList.toggle("seleccionado");

    /* Dando grupo a la vista */
    document.getElementById("elemento").classList.add(clase);
    
    /* Mostrando grupo */
    document.getElementById(clase).classList.add("grupo-seleccionado");
}

const removeSelect = document.querySelectorAll(".element");
removeSelect.forEach(remove =>
    {
    remove.addEventListener("dblclick",elimnarAnterior);
    });

/* dando evento a la contante boton */
botones.forEach(boton => 
    {
    boton.addEventListener("click", seleccionado);
    });