var nombre;
var edad;
salario = parseFloat;
salar = parseFloat;
nombre = prompt("Ingrese su nombre: ");
edad = prompt("Ingrese su edad: ");
salario = parseFloat(prompt("Ingrese su salario: "));
document.write();
if(edad >= 16 && edad <= 18){
    salar = salario;
    document.write(nombre + " con " + edad + " años cobra " + salario + " + 0% = " + salar);
}
else if(edad >= 19 && edad <= 50){
    salar = salario + ((salario * 5)/100);
    document.write(nombre + " con " + edad + " años cobra " + salario + " + 5% = " + salar);
}
else if(edad >= 51 && edad <= 60) {
    salar = salario + ((salario * 10)/100);
    document.write(nombre + " con " + edad + "años cobra " + salario + " + 10% = " + salar);
}
else if(edad>60){
    salar = salario + ((salario * 15)/100);
    document.write(nombre + " con " + edad + "años cobra " + salario + " + 15% = " + salar);
}
else if(edad < 16){
    document.write("No tienes la edad Suficiente para Trabajar")
}