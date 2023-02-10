document.addEventListener('DOMContentLoaded', () => {

    let mostrandoMasInfo = false;

    function actualizarMasinfo () {
        const parrafoHTML = document.getElementById("mas-informacion");
        parrafoHTML.style.display = mostrandoMasInfo ? "none" : "block";
        mostrandoMasInfo = !mostrandoMasInfo;
    }

    function actualizarButton() {
        const botonHTML = document.getElementById("btn-mas-info");
        botonHTML.innerText = mostrandoMasInfo ? "Mostrar menos info" : "Mostrar más info";
        botonHTML.style.background = mostrandoMasInfo ? "#64aec4" : "cadetblue";
    }
    
    document.getElementById("btn-mas-info").onclick = () => {
        actualizarMasinfo();
        actualizarButton();
    }

});