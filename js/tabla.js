/* toma todos los elementos que tengan la misma clase */
const botones = document.querySelectorAll(".btn-element");

/* creando la funcion */
const seleccionado = function (evento) {
    const select = document.querySelectorAll(".seleccionado");
    if(select.length >= 1)
    {
        elimnarAnterior();
    }else{
        /*Este obtine la clases */
    let clases = this.className;
    
    /*Este obtine por clase */
    let clase = this.classList[1];
    
    /*Este obtine el id */
    let id = this.id;
    
    /*Este obtine el contenido del elemento */
    let contenido = this.innerText;
    
    /*salida en la consola */
    console.log("el texto seleccionado es: " + clase)
    
    /* seleccionado elemento */
    document.getElementById(id).classList.toggle("seleccionado");

    /* Dando grupo a la vista */
    document.getElementById("elemento").classList.add(clase);
    
    /* Mostrando grupo */
    document.getElementById(clase).classList.add("grupo-seleccionado");
    }
}
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
 
 /* function clicktr(){
     seleccionado();
 } */
/* dando evento a la contante boton */
botones.forEach(boton => {
    boton.addEventListener("click", seleccionado)
}
);