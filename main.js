//funciones

class Usuario{
    constructor(nombre, contrasenia){
        this.nombre = nombre;
        this.contrasenia = contrasenia;
    }
}

function eventoRegistroUsuario (){

    //evento al clickear el boton de registro
    botonRegistroUsuario.addEventListener('click', (event) => {

        //freno el flow del input
        event.preventDefault();

        //obtengo los datos de los inputs
        const nombre = nombreCreado.value
        const contra = contraseniaCreada.value

        //creo el usuario y lo agrego a la lista
        usuarios.push(new Usuario(nombre, contra))

        localStorage.setItem("lista_de_usuarios", JSON.stringify(usuarios));

        //vacio los inputs
        nombreCreado.value = ""
        contraseniaCreada.value = ""

    });

}


// programa

const nombreCreado = document.getElementById('crearNombreUsuario')
const contraseniaCreada = document.getElementById('crearContraseniaUsuario')
const botonRegistroUsuario = document.getElementById('btn-registrar')
let usuarios = []

eventoRegistroUsuario()



