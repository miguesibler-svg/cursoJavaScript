let palabra= 'JavaScript';

document.write('La palabra es: '+ palabra);

//ver tamaño de un texto
document.write('<br>');
document.write('Cantidad de letras: '+ palabra.length);

//ver caracteres especificas de un texto

document.write('<br>');
document.write('Primera 4 letras: ', palabra.slice(0,4));

//ver caracteres especificas de un texto

document.write('<br>');
document.write('Primera 4 letras: ', palabra.substring(0,4));

//cambiar valores en un texto

let saludo='Hola a todos';

saludo= saludo.replace('Hola', 'adios');

document.write('<br>');
document.write('cambio de hola a dios: ', saludo);

//Poner en mayusculas

document.write('<br>');
document.write('en mayuscula: ', palabra.toUpperCase());

//Poner en minusculas

document.write('<br>');
document.write('en minusculas: ', palabra.toLowerCase());

//unir texto

let palabra2='curso de ';

document.write('<br>');
document.write('Unir palabres: ', palabra2.concat(palabra));

//acortar espacios entre textos

let palabra3= '            holaa                              '

document.write('<br>');
document.write(palabra3);
document.write('<br>');
document.write(palabra3.trimStart());
document.write(palabra3.trimEnd());
document.write(palabra3.trim());


//Cortar cantidad de caracteres

document.write('<br>');
document.write(palabra.split('Java'));

