function login(){

    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("clave").value;
    const mensaje = document.getElementById("mensaje");
//usuario y contraseña
    const USER_VALIDO = "user";
    const PASS_VALIDA = "0";

    if(user === USER_VALIDO && pass === PASS_VALIDA){
        localStorage.setItem("login","ok");
        window.location.href = "principal.html";
    }else{
        mensaje.textContent = "Usuario o clave incorrectos";
    }
}