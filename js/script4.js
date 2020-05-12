function openWindow(){
    openWindow = window.open('moreinfo.ht');
}
function mensaje(){
    var x = document.getElementById("numero01").Value;
    var y = document.getElementById("numero02").Value;
    var op = document.getElementById("operacion").Value;
    switch(op){
        case '1':
            document.getElementById("resultado").Value = (parseInt(x)+(parseInt(y)));
            break;
        case '2':
            document.getElementById("resultado").Value = (parseInt(x)-(parseInt(y)));
            break;
        case '3':
            document.getElementById("resultado").Value = (parseInt(x)*(parseInt(y)));
            break;
        case '4':
            document.getElementById("resultado").Value = (parseInt(x)/(parseInt(y)));
            break;
            default;
    }
}