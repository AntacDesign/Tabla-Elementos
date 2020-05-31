/* toma todos los elementos que tengan la misma clase */
const botones = document.querySelectorAll(".btn-element");

/* Funcion para quitar informacion de la vista */
function rmInfoView(){
    const infoElement = document.getElementById("infoElemento");
    infoElement.innerHTML = '';
}

/* Funcion para quitar seleccion */
function rmSelect() {
    const select = document.querySelectorAll(".seleccionado");
    if (select.length >= 1) {
        for (let i = 0; i < select.length; i++) {
            select[i].classList.remove("seleccionado");
        }
    }
}

/* Funcion para quitar elemnto seleccionado */
function rmElemet() {
    const select = document.getElementById("elemento");
    let grupo = select.classList[1];
    select.classList.remove(grupo);
}

/* Funcion para quitar grupo seleccionado */
function rmGrupo() {
    const select = document.querySelectorAll(".grupo-seleccionado");
    if (select.length >= 1) {
        for (let i = 0; i < select.length; i++) {
            select[i].classList.remove("grupo-seleccionado");
        }
    }
}

/* Funcion para quitar vista seleccionado */
function rmVista() {
    const vista = document.getElementById("elemento");
    vista.remove("elemento");
}

/* Funcion para remover rela grupo seleccionado */
function rmRuleGrupo() {
    const select = document.querySelectorAll(".reglaVertical");
    if (select.length >= 1) {
        for (let i = 0; i < select.length; i++) {
            select[i].classList.remove("reglaSelect");
        }
    }
}
/* Funcion para remover rela periodo seleccionado */
function rmRulePeriodo() {
    const select = document.querySelectorAll(".reglaHorizontal");
    if (select.length >= 1) {
        for (let i = 0; i < select.length; i++) {
            select[i].classList.remove("reglaSelect");
        }
    }
}
/* Funcion para quitar la seleccion de periodo y grupo */
function rmRule()
{
    rmRuleGrupo();
    rmRulePeriodo();
}

/* juntando las funciones de quitar */
function eliminarAnterior() {
    rmSelect();
    rmElemet();
    rmGrupo();
    rmRule();
}

/* Funcion para filtar el elemento */
function getFilteredByKey(array, key, value) {
    return array.filter(function (e) {
        return e[key] == value;
    });

}

/* creando la funcion principal */
const seleccionado = function (evento) {

    /* esta funcion limpiar la seleccion anterior */
    eliminarAnterior();

    /*Este obtine por clase */
    let clase = this.classList[1];

    /*Este obtine el id */
    let id = this.id;

    /* Este obtine la infomacion del elemento */
    const infoElement = document.getElementById("infoElemento");

    /* Extrayendo el json */
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', './js/elementos.json', true);
    xhttp.send();

    /* Json extraido */
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            /* prueba mostrando el JSON */
            /* console.log(this.responseText); */

            /* Poniendo el Json en una variable */
            let datos = JSON.parse(this.responseText);
            /* console.log(datos[0]); */

            /* Llamando y dando los datos a la funcion de filtar */
            const elementFiltered = getFilteredByKey(datos, "numeroAtomico", id);

            /* obteniendo el objeto */
            const obElement = elementFiltered[0];
            /* const yaison = JSON.parse(obElement); */
            console.log(obElement);

            /* Dando info del elemento */
            infoElement.innerHTML = `
                <span class="numeroAtomico-view">
                    ${obElement.numeroAtomico}
                </span>
                <span class="simboloElemento-view">
                    ${obElement.simbolo}
                </span>
                <span class="nameElement">
                    ${obElement.nombre}
                </span>
                <div class="masInfo-elemento">
                    <span class="pesoAtomico">
                        ${obElement.pesoAtomico}
                    </span>
                    <span class="yearDescubrimiento">
                        ${obElement.year}
                    </span>
                </div>
            `;

            /* Obteniendo Grupos y periodos */
            let nperiodo = document.querySelectorAll(".reglaHorizontal");
            let ngrupo = document.querySelectorAll(".reglaVertical");
            /* console.log(ngrupo[6].innerText); */

            /* Marca los grupos */
            for (let value of ngrupo)
            {
                if(value.innerText == obElement.grupo)
                {
                    const n = value.id;
                    console.log(n);
                    document.getElementById(n).classList.add("reglaSelect");
                }
            }
            /* Marca los periodos */
            for (let value of nperiodo)
            {
                if(value.innerText == obElement.periodo)
                {
                    const n = value.id;
                    console.log(n);
                    document.getElementById(n).classList.add("reglaSelect");
                }
            }
        }
    }

    /*salida en la consola */
    console.log("el texto seleccionado es: " + clase)

    /* seleccionando elemento */
    document.getElementById(id).classList.add("seleccionado");

    /* Dando grupo a la vista */
    document.getElementById("elemento").classList.add(clase);

    /* Mostrando grupo */
    document.getElementById(clase).classList.add("grupo-seleccionado");
}

/* DesSeleccionar boton con doble click */
/* const removeSelect = document.querySelectorAll(".element");
removeSelect.forEach(remove => {
    remove.addEventListener("dblclick", eliminarAnterior);
}); */


/* DesSeleccionar boton con la letra d */
document.addEventListener("keydown", function (e) {
    if (e.key == "d") {
        eliminarAnterior();
        rmInfoView();
    }
});

/* Dando evento a la contante boton */
botones.forEach(boton => {
    boton.addEventListener("click", seleccionado);
});