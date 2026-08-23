let numero= [];
numero = [13, 59, 599, 59.39, -59];

document.write('Elementos :', numero);
document.write('<br>');
document.write('Primer lemento: ', numero[0]);
document.write('<br>');

numero[0]= 14;

document.write('Elementos :', numero);

let frutas= ['Manzanas', 'Peras', 'Naranjas', 'Mangos'];

document.write('<br>');
document.write(frutas);

//Metodos de los arrays

//ver cantidad de elementos

document.write('<br>');
document.write('Cantidad: ', numero.length);


//saber ultimo elemento

document.write('<br>');
document.write('Ultimo elemento: ', numero[numero.length-1]);

//arrays en tipo texto

document.write('<br>');
document.write('en string: ', numero.toString());

//unir tipos de arrays
let letas=['a', 'b', 'c'];
let numeros=[1,2,3]

document.write('<br>');
document.write('Alfanumerico ', numeros.concat(letas));


//borrar el ultimo elemento de un array

document.write('<br>');
numero.pop();
document.write(numero);


//agreagar elemento al final

document.write('<br>');
numero.push(15);
document.write(numero);

//eliminar elemento al final

document.write('<br>');
numero.shift(15);
document.write(numero);

//agregar elemento al incio

document.write('<br>');
numero.unshift(15);
document.write(numero);


//elimier elemento apartir de un punto

document.write('<br>');
numero.splice(2,3);
document.write(numero);


//Como copiar un arreglo

let cantidades=[100, 200, 500, 600, 800];
let copia= cantidades.slice(0, 4);

document.write('<br>');
document.write('Array copia: ', copia);

//Organiza alfabeticamente un arreglo 

document.write('<br>');
let objetos = ['Carro', 'votella', 'planeta', 'zorro']
document.write(objetos.sort());


//trae el arreglo en reversa

document.write('<br>');
document.write(objetos.reverse());
