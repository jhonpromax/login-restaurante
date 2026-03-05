function validarLogin(){

let usuario=document.getElementById("usuario").value;
let contrasena=document.getElementById("contrasena").value;

if(usuario=="cliente" && contrasena=="1234"){

window.location.href="dashboard-cliente.html";

}

else if(usuario=="admin" && contrasena=="admin123"){

window.location.href="dashboard-admin.html";

}

else{

document.getElementById("mensaje").innerText="Usuario o contraseña incorrectos";

}

}