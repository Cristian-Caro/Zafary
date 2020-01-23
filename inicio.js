const boton =window.document.querySelector('#boton');
boton.addEventListener('click',valida);


function valida(){
   const usuariomail =window.document.querySelector('#email');
   const userclave=window.document.querySelector('#clave');
    const usuariomail1=usuariomail.value;
    const userclave1=userclave.value;
    usuariomail.focus();
if (usuariomail1 ==='ejemplo@gmail.com' && userclave1 ==='123456'){
 
    console.log(usuariomail.value);
    document.getElementById('muestra').innerHTML = 'Iniciando sesión…';
    window.location.href = './Zafary/zafary.html';

    console.log('iniciando sesión...')
}else{
    console.log('Email y/o contraseña incorrecta...!')
    document.getElementById('muestra').innerHTML = 'Email y/o contraseña incorrectos...!';
}
usuariomail.value='';
userclave.value='';
}