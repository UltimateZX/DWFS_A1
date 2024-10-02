document.getElementById("body1").style.backgroundColor = "silver";
document.getElementById("parrafo1").innerHTML =
  "Segundo cambio al párrafo, esta ves con un archivo .js";
function cambiarTamaño() {
  document.getElementById("textoCompleto").style.fontSize = "30px";
}
function calculoMatematico()
{
    let a = 4;
    let b = 9;
    let numero = a + b;
    document.getElementById("resultado").innerHTML = numero;
}
function calculoMatematico2()
{
    let a = 15;
    let b = 9;
    let numero = a + b;
    document.getElementById("resultado").innerHTML = numero;
}
function saludar()
{
    let edad = document.getElementById("txtEdad").value;
    let condicion;
    if(edad > 0 && edad < 18)
    {
        condicion = "menor de edad"
    }
    else if(edad >= 18 && edad < 65)
    {
        condicion = "mayor de edad"
    }
    else if(edad >= 65)
    {
        condicion = "adulto mayor"
    }
    let nombre = document.getElementById("txtNombre").value;
    let paterno = document.getElementById("txtPaterno").value;
    let materno = document.getElementById("txtMaterno").value;
    window.alert("Bienvenido " + nombre + " " + paterno + " " + materno +", usted califica como " + condicion);

}
function bonoHijos()
{
    let radioSi = document.getElementById("radioSi").value;
    let radioNo = document.getElementById("radioNo").value;
    let sueldo = document.getElementById("txtSueldo").value;
    let bono = 200;
    if(radioSi.checked)
    {
        document.getElementById("resultado").value = parseInt(sueldo) + bono;
    }
    else if(radioNo.checked)
    {
        document.getElementById("resultado").value = parseInt(sueldo);
    }
}
function listaMercado()
{
    let lista = "Su lista es:\n";   
    if(document.getElementById("papa").checked)
    {
        lista = lista + "Papa\n";
    }
    if(document.getElementById("tomate").checked)
    {
        lista = lista + "Tomate\n";
    }
    if(document.getElementById("lechuga").checked)
    {
        lista = lista + "Lechuga\n";
    }
    if(document.getElementById("zanahoria").checked)
    {
        lista = lista + "Zanahoria\n";
    }
    if(document.getElementById("ajo").checked)
    {
        lista = lista + "Ajo\n";
    }
    if(document.getElementById("coliflor").checked)
    {
        lista = lista + "Coliflor\n";
    }
    window.alert(lista);
}

function listaConFor()
{
    let lista = "Su lista es:\n";
    for(let i=1;i<=6;i++)
    {
        let item = "item"+i
        if(document.getElementById(item).checked)
        {
            let label = "label"+i
            lista = lista + document.getElementById(label).innerHTML + "\n";
        }
    }
    window.alert(lista);
}