//operador &&(Y)
let continente, edad;
continente= prompt('Ingese su continente...');
edad= parseInt(prompt('ingrese su edad...'));

if(continente == 'America' && edad>=18){
    document.write('Eres un adulto americano');
}else {
    document.write('o no eres adulto o no eres americano')

}


// operador or

let dia, mes, anio;

dia= prompt('ingese dia');
mes= prompt('ingese mes');
anio= prompt('ingese año');


if(mes == 1 || mes==2  || mes== 3){
    document.write('perstenese al primer trimeste');
}else{

    document.write('no pertenece al primer trimestre');
}