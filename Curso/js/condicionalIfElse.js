let nombre, edad;

nombre= prompt('ingrese su nombre');

edad= parseInt(prompt('ingresa su edad'));


if(edad>=18){
    document.write('eres mayor de edad');

}else{

    if(edad <18){

         document.write('tu no eres mayor de dad');
    }else{
        document.write('no has ingresado datos');
    }
}