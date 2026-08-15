let a, b, sum, res, mul, div, resid, poten;

//pedir datos al usuario

a= parseInt(prompt('Ingrese valor 1'));
b= parseInt(prompt('Ingrese valor 2'));

//suma

sum = a + b;

//resta

res=a-b;

//producto

mul=a*b;

//cosiente

div=a/b;

//residuo

resid= a%b;

//potenciacion
poten= a**b;

document.write('La suma es: '+ sum +'<br>');
document.write('La resta es: '+res+'<br>');
document.write('La multipliacion es: '+ mul+'<br>');
document.write('La divicion es: '+div+'<br>');
document.write('El residuo es: '+resid+'<br>');
document.write('La potenciacion es: '+poten+'<br>')

