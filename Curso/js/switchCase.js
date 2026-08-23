let valor;
valor=parseInt(prompt('ingrese un valor del 1 al 3'));


switch(valor){
    case 1:
        document.write('1');
        break;

    case 2:
        document.write('2');
        break;

    case 3:
        document.write('3');
        break;

    default: 
        document.write('no es numero valido');
    break;
}