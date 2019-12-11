//Declaración de variables

bienvenida();

var nombreUsuario;

var saldoCuenta = 3500;

var limiteExtraccion = 1000;

var agua = 350;
 
var telefono = 425;

var luz = 210;

var internet = 570;

var CuentaAmiga1 = "1234567";

var CuentaAmiga2 = "7654321";

var codigoDeseguridad;

var codigo;


if(nombreUsuario == null){
    alert("Debes crear tu nombre de usuario");
    bienvenida();
}
else if(nombreUsuario == ""){
    alert("Debes crear tu nombre de usuario");
    bienvenida(); 
};


if (codigoDeseguridad == ""){
    alert("Debes crear un codigo de seguridad");
    bienvenida();
    
}
else if(codigoDeseguridad == null){
    alert("Debes crear un codigo de seguridad");
    bienvenida();
}
else{
    iniciarSesion();
};




//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function sumaDinero(dinero) {
    saldoCuenta += parseInt(dinero);

}

function restaDinero(dinero) {
    saldoCuenta -= parseInt(dinero);

}


function cambiarLimiteDeExtraccion() {

    if (codigo != codigoDeseguridad){
        alert("Acción Bloqueada por seguridad");
    }

    else {
      var nuevoLimite = prompt("Ingresa Limite de Extraccion");
    }

    if(nuevoLimite==null){
        console.log("Operacion cancelada");
    }

    else if(nuevoLimite<=0){
        alert("Ingrese un monto valido");
        cambiarLimiteDeExtraccion();
    }
    
    else{
    limiteExtraccion = parseInt(nuevoLimite);

    actualizarLimiteEnPantalla();

    alert ("Nuevo Limite:" + limiteExtraccion );
    }
}



function iniciarSesion(){
 
    if (codigoDeseguridad != codigo){
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
        saldoCuenta = 0;
    
    }
    else {
        alert("Bienvenido/a "+nombreUsuario+" ya puedes comenzar a realizar operaciones");
        
    }
};



function extraerDinero() {

    if (codigo != codigoDeseguridad){
        alert("Acción Bloqueada por seguridad");
    }
    else{

    var dinero = prompt("Dinero a Ingresar");

    if (saldoCuenta < dinero){

        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.")
    }

    else if(dinero == null){
        console.log("Operación Cancelada");
    }

    else if(dinero<=0){
        alert("Ingrese un monto valido");
        extraerDinero();
    }

    else if (limiteExtraccion < dinero){
        alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extraccion.")
    }

    else if(dinero % 100 != 0){
        alert("Solo se pueden extraer billetes de 100"); 
    }

    else{
        var saldoAnterior = saldoCuenta;

        restaDinero ( dinero, saldoCuenta);
    
        actualizarSaldoEnPantalla();
        
        alert ("Has Retirado: $" + dinero +  "\n Saldo Anterior: $" + saldoAnterior + "\n Saldo Actual: $" + saldoCuenta);
    }

}
}

function depositarDinero() {

    if (codigo != codigoDeseguridad){
        alert("Acción Bloqueada por seguridad");
    }
    else{

     var dinero = prompt("Dinero a Ingresar");

        if(dinero == null){
            console.log("Operación Cancelada");
        }
        else if(dinero<=0){
            alert("Ingrese un monto valido");
            extraerDinero();
        }
        else{

        var saldoAnterior = saldoCuenta;

        sumaDinero ( dinero, saldoCuenta);  

        actualizarSaldoEnPantalla();
    
        alert ("Has Depositado: $" + dinero +  "\n Saldo Anterior: $" + saldoAnterior + "\n Saldo Actual: $" + saldoCuenta);
        }
}
}

function pagarServicio() {

    if (codigo != codigoDeseguridad){
        alert("Acción Bloqueada por seguridad");
    }
    else{
    var servicio = prompt("Ingrese el número que corresponda con el servício que queres pagar"+"\n 1-Agua"+"\n 2-Luz"+"\n 3-Internet"+"\n 4-Teléfono");
    }

    if(servicio==null){
        console.log("Operacion cancelada");
    }
    
    else if(servicio==0){
        alert("Seleccione un servicio utilizando los número del 1 al 4 segun corresponda");
        pagarServicio();
    }

    else{
     switch(servicio){

    case "1":{

      if (saldoCuenta < agua){

        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.")
    }
      else{
        var saldoAnterior = saldoCuenta;
        restaDinero(agua,saldoCuenta);
        actualizarSaldoEnPantalla();
        alert ("Has pagado el servicio Agua"+"\n Saldo Anterior: $" + saldoAnterior + "\n Dinero descontado: $"+agua+"\n Saldo Actual: $" + saldoCuenta);
    }
    break;
    }
    case "2":{

      if (saldoCuenta < luz){

        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.")
    }
      else{
        var saldoAnterior = saldoCuenta;
        restaDinero(luz,saldoCuenta);
        actualizarSaldoEnPantalla();
        alert ("Has pagado el servicio Luz"+"\n Saldo Anterior: $" + saldoAnterior + "\n Dinero descontado: $"+ luz +"\n Saldo Actual: $" + saldoCuenta);
    }
    break;
    }
    case "3":{
      
      if (saldoCuenta < internet){

        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.")
    }
      else{
        var saldoAnterior = saldoCuenta;
        restaDinero(internet,saldoCuenta);
        actualizarSaldoEnPantalla();
        alert ("Has pagado el servicio Internet"+"\n Saldo Anterior: $" + saldoAnterior + "\n Dinero descontado: $"+ internet +"\n Saldo Actual: $" + saldoCuenta);
    }
    break;
    }
    case "4":{
      
      if (saldoCuenta < telefono){
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.")
    }

      else{
        var saldoAnterior = saldoCuenta;
        restaDinero(telefono,saldoCuenta);
        actualizarSaldoEnPantalla();
        alert ("Has pagado el servicio Teléfono"+"\n Saldo Anterior: $" + saldoAnterior + "\n Dinero descontado: $"+ telefono +"\n Saldo Actual: $" + saldoCuenta);
    }
    break;
    }
    default:
        alert("No existe ese servicio.");
    }

}

}

function transferirDinero() {
    alert("Sus cuentas amigas son:"+"\nCuenta amiga 1:1234567"+"\nCuenta amiga 2:7654321");

    if(codigo != codigoDeseguridad){
        alert("Acción Bloqueada por seguridad");
    }
    else{

    var dineroTransferencia = prompt("Ingrese monto a trasferir");
    
    if(dineroTransferencia === null){
        console.log("Operacion cancelada");
    }

    else if(dineroTransferencia<=0){
        alert("Ingrese un monto valido");
        transferirDinero();
    }

    else if(dineroTransferencia>saldoCuenta){
        alert("No hay saldo suficiente");
    }

    else if (dineroTransferencia<saldoCuenta){
        var cuentaAmiga = prompt("Ingrese numero de cuenta");

        switch(cuentaAmiga){

            case "1234567":{
                restaDinero(dineroTransferencia,saldoCuenta);
                actualizarSaldoEnPantalla();
                alert("Se han trasferido: $"+dineroTransferencia+"\n Cuenta destino: "+cuentaAmiga);
            }
            break;
            
            case "7654321":{
                restaDinero(dineroTransferencia,saldoCuenta);
                actualizarSaldoEnPantalla();
                alert("Se han trasferido: $"+dineroTransferencia+"\n Cuenta destino: "+cuentaAmiga);
            }
            break;

            default:
                alert("No es una cuenta amiga");

        }
    
    }
}   
}


function bienvenida(){

    alert("Bienvenido"+"\nPrimero deberas crear tu nombre de usuario y clave de seguridad para poder operar."+"\n¡¡ESPERO LO DISFRUTES!!");
    nombreUsuario = prompt("cree su nombre de usuario");
    codigoDeseguridad = prompt("Crea tu clave de seguridad");
    codigo = prompt("Ingrese Codigo de Seguridad: ");


};


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
