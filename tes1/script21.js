let saida = document.getElementById("saida");


let cidade = prompt("digite sua cidade:");
let dia = parseInt(prompt("digite o dia atual"));
let mes = prompt("digite o mês atual");
let ano = parseInt(prompt("digite o ano"));

saida.innerHTML =`cidade: ${cidade} Dia: ${dia} mes: ${mes} ano: ${ano}`;