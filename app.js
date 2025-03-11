// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*
Se declara un Array vacio llamado "amigo" para almacenar los nombres
de nuestros amigos, cada nombre sera un elemnto dentro del array.
*/
let amigo =[];

/*
Declaramos y construimos una Función llamada "agregarAmigo" la cual se encarga de recibir
un Input del tipo Texto dentro del Placeholder identificado con el id="amigo"
Para ello utilizamos DOM a traves del método getElementById:
*/
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;

    //console.log(amigo);

    //Construimos una Validación para el botón "Agregar amigo":
    if(!nombreAmigo) {
        alert('Debes indicar un nombre.');

        return;
    }
    //Agrega elemento al Array "amigo":
    amigo.push(nombreAmigo);
    console.log(amigo);
    //Limpiar campo del Placeholder para un nuevo Input:
    inputAmigo.value = '';
    inputAmigo.focus();
    //Llama a la Función "mostrarAmigos":
    mostrarAmigos();
};

/*
Declara y construye función "mostrarAmigos".
Llama al elemento HTML con id="listaAmigos" utilizando DOM y Método getElementById
Inserta un String vacío al elemento HTML "listaAmigos" para después agregar un nuevo item.
*/
function mostrarAmigos() {
    listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    /*
    Crea bucle que asigna un nuevo item en el elemento HTML role="list" cambiando de index
    */
    for(let i = 0 ; i < amigo.length ; i++) {
        let item = document.createElement('li');
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
};


/*
Declara y crea Función para sortear los elementos del Array "amigo".
Construye validación para el botón "sortearAmigo".
*/
function sortearAmigo() {
    if(amigo.length === 0) {
        alert('No hay amigos para sortear');

        return;
    }

    /*
    Declara variable que recibirá un valor aleatorio el cual sera definido segun la
    longitud del Array.

    Llama al elemento HTML utilizando DOM.
    Asigna valor al elemento HTML concatenando utilizando Template Strings. 
    Muestra en pantalla resultado del Sorteo.
    */
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El Amigo Sorteado es: ${amigoSorteado}.`;

    /*
    Limpia campo de lista de amigos para solo mostrar el resultado del sorteo
    ingresando un String vacío al elemento HTML
    */
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
};