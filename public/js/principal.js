// protección básica
if(localStorage.getItem("login") !== "ok"){
    window.location.href = "index.html";
}

function ir(opcion){
    alert("Ir a: " + opcion);
}

//función logout
function logout(){
    localStorage.removeItem("login");
    window.location.href = "index.html";
}