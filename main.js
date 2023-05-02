//CAJERO SEGUNDA PRE ENTREGA

//CLASE USURARIO

class Usuario {
    constructor(usuario, contraseña, dni, saldo, limite) {
        this.usuario= usuario;
        this.contraseña= contraseña;
        this.dni= dni;
        this.saldo= saldo;
        this.limite= limite
    }
}

const usuario1= new Usuario("Salcedo Marcela", 4561, 53098760, 125000,80000);
const usuario2= new Usuario("Galvan Ian", 9687, 42345009, 60000, 20000);
const usuario3= new Usuario("Galvan Dafne", 6956, 51069838, 100000, 70000);
const usuario4= new Usuario("Salcedo Tadeo", 4458, 39370309,1000000, 650000);

const arrayUsuarios= [usuario1, usuario2, usuario3, usuario4];
console.log(arrayUsuarios);

//MENU

function menu(){
    alert("Bienvendio al Cajero de CoderBank");
    let opcion= parseInt(prompt("Seleccione una opción: \n 1) Nuevo usuario \n 2) Retiro \n 3) Deposito \n 4)Aumentar limite tarjeta \n 5) Eliminar Cuenta \n 6) Salir"));
    return opcion;
}

function limite(){
    let dni= parseInt(prompt("Ingrese el DNI del cliente: "));
    let usuario= arrayUsuarios.find(usuario=>usuario.dni === dni)
    letaumentoLimite= parseInt(prompt("Puede aumentar su limite en $50.000, ingrese el monto a aumentar: "));
    this.limite= usuario.limite + aumentoLimite;
    alert(usuario.usuario + " Su nuevo limite es de: $" + this.limite);
    console.log(`El usuario ${usuario.usuario} aumento su limite en: $ ${aumentoLimite}`);
}


//FUNCION REGISTRO

function nuevoUsuario(){
    let nombre= prompt("Ingrese nombre del usuario: ");
    let contraseña= parseInt(prompt("Ingrese una contraseña: "));
    let dni= parseInt(prompt("Ingrese el dni del usuario: "));
    let saldo= parseInt(prompt("Ingrese el saldo del usuario: "));
    let usuario= new Usuario(nombre, contraseña, dni, saldo);
    arrayUsuarios.push(usuario);
    console.log(arrayUsuarios);
    alert(`Bienvenido ${nombre}`);
}

//FUNCION ELIMINAR CUENTA

function eliminarUsuario(){
    let dni = parseInt(prompt("Ingrese el DNI del usuario: "));
    let usuario = arrayUsuarios.find( usuario => usuario.dni === dni);
    let indice = arrayUsuarios.indexOf(usuario);
    arrayUsuarios.splice(indice, 1);
    console.log(arrayUsuarios);
}

//FUNCION RETIRO

function retiro(){
    let dni= parseInt(prompt("Ingrese el DNI del cliente: "));
    let usuario= arrayUsuarios.find(usuario=>usuario.dni === dni)
    let monto= parseInt(prompt("Ingrese monto a retirar: "));
    this.nuevoSaldo= usuario.saldo - monto;
    alert("Su saldo restante es de: $" + this.nuevoSaldo);
    console.log(`El usuario ${usuario.usuario} retiró: $ ${monto}`);
}

//FUNCION DEPOSITO

function deposito(){
    let dni= parseInt(prompt("Ingrese el DNI del cliente: "));
    let usuario= arrayUsuarios.find(usuario=>usuario.dni === dni)
    let monto= parseInt(prompt("Ingrese monto a depositar: "));
    this.deposito= usuario.saldo + monto;
    alert("Su saldo actual es de: $" + this.deposito);
    console.log(`El usuario ${usuario.usuario} depositó: $ ${monto}`);
}

//FUNCION SALIR

function salir(){
    alert("Gracias por utilizar nuestros servicios.");
}

//PROGRAMA

let opcion= menu();
switch (opcion){
    case 1:
        nuevoUsuario();
        break;
    case 2:
        retiro();
        break;
    case 3:
        deposito();
        break;
    case 4:
        limite();
        break;
    case 5:
        eliminarUsuario();
        break;
    case 6:
        salir();
        break;
    default:
        alert("Opcion no valida");
        break;    
}