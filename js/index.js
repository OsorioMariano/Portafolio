const enlaces = document.querySelector(".presentacion__contenido-enlaces");

enlaces.children[0].addEventListener("click", () =>{
    window.open("https://github.com/OsorioMariano")
})

enlaces.children[1].addEventListener("click", () =>{
    window.open("https://www.linkedin.com/in/osoriomariano-om/")
})

enlaces.children[2].addEventListener("click", () =>{
    window.open("curriculum.html")
})



const botonesRepositorio = document.querySelectorAll(".boton__repo");
const botonesVisita = document.querySelectorAll(".boton__ver")

const reemplazos = {
    encriptado:{
        repo: "https://github.com/OsorioMariano/challenge1-Alura",
        visita: "https://osoriomariano.github.io/challenge1-Alura/"
    },
    juego:{
        repo: "https://github.com/OsorioMariano/challenge2-Alura",
        visita: "https://osoriomariano.github.io/challenge2-Alura/"
    },
    concurso:{
        repo: "https://github.com/OsorioMariano/trabajoUniversidad"
    }
}

botonesRepositorio.forEach( boton =>{
    boton.addEventListener("click", (event) => {
        let indice = event.path[3].dataset.tipo;
        if(reemplazos[indice]){
            window.open(reemplazos[indice]["repo"])
        }
    })
})

botonesVisita.forEach( boton =>{
    boton.addEventListener("click", (event) => {
        let indice = event.path[3].dataset.tipo;
        if(reemplazos[indice]){
            window.open(reemplazos[indice]["visita"])
        }
    })
    
})



const inputs = document.querySelectorAll("[data-entrada]");

const mensajes = {
    valueMissing: "El campo no puede quedar vacio",
    typeMismatch: "El email no tiene un formato adecuado",
    patternMismatch: "No se permite números o carácteres especiales"
}

const tiposErrores =[
    "valueMissing",
    "typeMismatch",
    "patternMismatch"
]

inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        let elemento = input.target;
        let elementoPadre = elemento.parentElement;
        tiposErrores.forEach( error =>{
            if(elemento.validity.valid){
                elementoPadre.classList.remove("error");
                elementoPadre.querySelector("span").innerHTML=""
            }else if(elemento.validity[error]){
                elementoPadre.classList.add("error");
                setTimeout(()=>{elementoPadre.querySelector("span").innerHTML= mensajes[error]}, 300)
            }
        })
    })
})

