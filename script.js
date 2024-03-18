const botao = document.getElementById("botao")
botao.addEventListener("click", alertar);

var nome = document.getElementById("nome");
var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logradouro = document.getElementById("logradouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");
function alertar(){
    //alert("O nome inserido foi" + nome.value);
    
    saida.innerText= "Nome: " + nome.value +
              "\n E-mail: " + email.value + 
              "\n Telefone: " + telefone.value; + 
              "\n CEP: " + cep.value +
              "\n telefone: " + logradouro.value +
              "\n : " + complemento.value +
              "\n E-mail: " + logradouro.value +
              "\n E-mail: " + numero.value +
    
}