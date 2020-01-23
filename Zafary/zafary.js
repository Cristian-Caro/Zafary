const botonh =window.document.querySelector('#btnhome');
botonh.addEventListener('click',mostrarDatoshome);
const botonW =window.document.querySelector('#btnwhats');
botonW.addEventListener('click',mostrarDatoswhatzapp);
const botonz =window.document.querySelector('#btnzpot');
botonz.addEventListener('click',mostrarDatosZpotify);

const contenido =window.document.querySelector('#content');
function mostrarDatoshome(){
    
    contenido.setAttribute('src','../Home/home.html');

}

function mostrarDatoswhatzapp(){
    contenido.setAttribute('src','../whatZapp/whats.html');

}

function mostrarDatosZpotify(){
    contenido.setAttribute('src','../Zpotify/zpotify.html');
}