//funciones

function obtenerUsuariosEnLS (){

    let usuarioLS = localStorage.getItem("lista_de_usuarios")

    if (usuarioLS !== null){

        usuariosEnLS = JSON.parse(usuarioLS)

    }

    return usuariosEnLS


}

function errorEnElLogin (){

    //creo un elemento p que le haga saber al usuario del error
    const id = 'rojo'
    const p = document.createElement("p")
    p.id = id
    p.innerHTML = "Datos erroneos o el usuario no existe"

    //lo agrego al document
    error.append(p)

}

function buscarUsuarioIngresadoEnElLS (nombreDelLogin, contraDelLogin){

    //veo si existe el usuario en el local storage
    const indiceUsuario = usuariosEnLS.find((usuario) => (usuario.nombre === nombreDelLogin) && (usuario.contrasenia === contraDelLogin))

    //si existe lo mando a otra pagina
    indiceUsuario !== undefined? window.location = 'main.html' : errorEnElLogin()
}

//evento al clickear el boton de login
function eventoLogin (){

    botonLoginUsuario.addEventListener("click", (event) => {

        //freno el flow del input
        event.preventDefault();
    
        //obtengo los datos de los inputs
        const nombreDelLogin = usuarioLogin.value
        const contraDelLogin = contraseniaLogin.value
    
        obtenerUsuariosEnLS()
        buscarUsuarioIngresadoEnElLS(nombreDelLogin, contraDelLogin) 
    
        //vacio los inputs
        nombreDelLogin.value = ""
        contraDelLogin.value = ""  
    
    })

}


//programa

const botonLoginUsuario = document.getElementById('btn-login')
const usuarioLogin = document.getElementById('usuarioLogin')
const contraseniaLogin = document.getElementById('contraseniaLogin')
const error = document.getElementById('loginForm')
let usuariosEnLS = []

eventoLogin()
