//Funciones

class Alumno {

    constructor(mesNacimiento, anioNacimiento){

        this.mesNacimiento = mesNacimiento;
        this.anioNacimiento = anioNacimiento;
        this.cursoAlumno = 0

    }

    //calculo el anio en el que esta el alumno de la escuela secundaria
    calcularCursoDelAlumno (){

        const anioActual = 2023
        const edadPrograma = anioActual - this.anioNacimiento


        if (this.mesNacimiento >= 7 && this.mesNacimiento <= 12){

            switch(edadPrograma){

                case 18:
                    return this.cursoAlumno = 6

                case 17:
                    return this.cursoAlumno = 5

                case 16:
                    return this.cursoAlumno = 4

                case 15:
                    return this.cursoAlumno = 3

                case 14:
                    return this.cursoAlumno = 2

                case 13:
                    return this.cursoAlumno = 1
            }

        }else if (this.mesNacimiento >= 1 && this.mesNacimiento <= 6){

            switch(edadPrograma){

                case 17:
                    return this.cursoAlumno = 6

                case 16:
                    return this.cursoAlumno = 5

                case 15:
                    return this.cursoAlumno = 4

                case 14:
                    return this.cursoAlumno = 3

                case 13:
                    return this.cursoAlumno = 2

                case 12:
                    return this.cursoAlumno = 1

            }

        }

    }

}

//muestro en la pagina el anio de cursada del alumno a traves de una etiqueta p
function mostrarAnioDeCursada (alumno){

    alumno.calcularCursoDelAlumno()
       
    const p = document.createElement('p')
    p.innerHTML = `Usted esta en ${alumno.cursoAlumno} anio`
    p.id = "psection2PP"

    ppSection.append(p)
    
}

//creo los alumnos con los datos
function crearAlumnos (mes, anio){

    const alumno = new Alumno(Number(mes), Number(anio))

    alumnos.push(alumno)
    localStorage.setItem('alumnos', JSON.stringify(alumnos))

    mostrarAnioDeCursada(alumno)
    
}

//creo los inputs y el h1 
function crearInputs (){

    //creo el h1
    const h1 = document.createElement('h1')
    h1.id = 'h1sectionPP'
    h1.innerHTML = `Bienvenido`

    //creo el div
    const div = document.createElement('div')
    div.id = 'divSectionPP'

    //creo el input para el mes de nacimiento del alumno
    const inputMesUsuario = document.createElement('input')
    inputMesUsuario.type = 'number'
    inputMesUsuario.placeholder = 'Ingrese su mes de nacimiento'
    inputMesUsuario.id = 'inputMesPP'

    //creo el input para el anio de nacimiento del alumno
    const inputAnioUsuario = document.createElement('input')
    inputAnioUsuario.type = 'number'
    inputAnioUsuario.placeholder = 'Ingrese su anio de nacimiento'
    inputAnioUsuario.id = 'inputAnioPP'

    //creo el boton de submit
    const btnSectionPP = document.createElement('button')
    btnSectionPP.innerHTML = 'Submit'
    btnSectionPP.id = 'inputBotonPP'

    //creo el evento del boton
    btnSectionPP.addEventListener('click', (event) => {

        //freno el flow del input
        event.preventDefault();

        //llamo a la funcion para crear los alumnos
        crearAlumnos(inputMesUsuario.value, inputAnioUsuario.value)

    })

    //agrego los inputs al div
    div.append(inputMesUsuario, inputAnioUsuario, btnSectionPP);

    //agrego el h1 y el div a la seccion del main
    ppSection.append(h1, div);

}


//Programa

const ppSection = document.getElementById('sectionPP')
const ppSection2 = document.getElementById('section2PP')
let usuariosEnLS = []
let nombreUser = ""
let alumnos = JSON.parse(localStorage.getItem('alumnos')) || []


crearInputs()

//localStorage.clear()



