  
var opcion = prompt("Opcion: ")
switch(parseFloat(opcion)) {
    case 1:
        x = parseFloat(prompt("Ingrese N°1: "))
        y = parseFloat(prompt("Ingrese N°2: "))
        document.write("La suma es: ",x+y);
            break;
    case 2:
        x = parseFloat(prompt("Ingrese N°1: "))
        y = parseFloat(prompt("Ingrese N°2: "))
        document.write("La resta es: ",x-y);
            break;
    case 3:
        x = prompt("Ingrese N°1: ")
        y = prompt("Ingrese N°2: ")
        document.write("El producto es: ",x*y);
            break;
    case 4:
        x = prompt("Ingrese N°1: ")
        y = prompt("Ingrese N°2: ")
        if (y==0){
            document.write("El valor ingresado es incorrecto");
            y = prompt("Ingrese N°2: ")
            document.write("La division es: ",x/y);
        }else{
        document.write("La division es: ",x/y);
        }
            break;
    case 5:
        x = prompt("Ingrese N°1: ")
        document.write("La raiz cubica es: ",Math.pow(x,1/3));
            break;
    case 6:
        x = prompt("Ingrese N°1: ")
        var aws=1
        for(i=1; i<=x; i++) {
            aws = aws * i;}
        document.write("El factorial es: ",aws);
            break;
    case 7:
        x = prompt("Ingrese N°1: ")
        y = prompt("Ingrese N°2: ")
        document.write("La potencia es: ",Math.pow(x,y));
            break;
    default:

            break;
}


