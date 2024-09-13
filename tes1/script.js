/* const num1 = parseFloat(prompt ("Digite o número1: "));
const num2 = parseFloat(prompt ("Digite o número2:"));
let soma, subt, mult, divi, resto, expo;
soma=num1+num2;
subt=num1-num2;
mult=num1*num2;
divi=num1/num2;
resto=num1%num2;
expo=num1**num2;
let saida = document.getElementById("saida");
saida.innerHTML="<br>Soma = "+soma;
saida.innerHTML+="<br>Subtração = "+subt;
saida.innerHTML+="<br>Multiplicação = "+mult;
saida.innerHTML+="<br>Divisão = "+divi;
saida.innerHTML+="<br>Resto = "+resto;
saida.innerHTML+="<br>Expo = "+expo;

*/

let a,b,c,d;
let saida = document.getElementById("saida");
a=10; //a=10
b=2; //b=2
a+=b; //a=10+2 //a=12
b-=5; // b=2-3//b=-3
saida.innerHTML="a = "+a;
saida.innerHTML+="<br>b = "+b;
c=11;
d=6;
c%=d;//c=11 -- d=6 //11%6 == 5
d+=a;//d=6+12//d=18
saida.innerHTML+="<br>c = "+c;
saida.innerHTML+="<br>d = "+d;