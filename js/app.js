function ola(){
    const resposta= document.getElementById("resp");
    resposta.innerText = "olá, selwyn";
}
const botao = document.getElementById("bntClicar");
botao.addEventListener("click", ola);