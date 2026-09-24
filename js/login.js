
let login = document.getElementById("txtLogin");
let senha = document.getElementById("txtSenha");
let botao = document.getElementById("btnClicar");
/**Imaginemos que o login e senha venha através do banco de dados */
const loginBd="gandalf@gmail.com";
const senhaBd="anel_do_frodo";
function clicar() {
    let usuarioDigitado = login.value;
    let senhaDigitada = senha.value;
    if(loginBd === usuarioDigitado && senhaBd === senhaDigitada){
        //se der tudo certo
        window.location.href='../../index.html';
    }else{
        alert(`login ou senha incorretos.`);
    }    
}
botao.addEventListener("click",clicar);