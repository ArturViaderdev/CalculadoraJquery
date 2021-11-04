var x;
x=$(document);
x.ready(inicializarEventos);
var comapuesta=0;
var decimales=0;
var operacion =0;
var introduciendo = 0;
var numeroanterior;


function inicializarEventos()
{
  var x;
  x=$("#0");
  x.click(pulsacero);
  x=$("#1");
  x.click(pulsauno);
  x=$("#2");
  x.click(pulsados);
  x=$("#3");
  x.click(pulsatres);
  x=$("#4");
  x.click(pulsacuatro);
  x=$("#5");
  x.click(pulsacinco);
  x=$("#6");
  x.click(pulsaseis);
  x=$("#7");
  x.click(pulsasiete);
  x=$("#8");
  x.click(pulsaocho);
  x=$("#9");
  x.click(pulsanueve);
  x=$("#cancela");
  x.click(pulsacancela);
  x=$("#suma");
  x.click(pulsasuma);
  x=$("#resta");
  x.click(pulsaresta);
  x=$("#multiplica");
  x.click(pulsamultiplica);
  x=$("#divide");
  x.click(pulsadivide);
  x=$("#decimal");
  x.click(pulsadecimal);
  x=$("#igual");
  x.click(pulsaigual); 
  x=$("#borra");
  x.click(borra);   
   x=$("#negativo");
  x.click(negativo);   
    
}

function negativo()
{
    var x;
    x=$("#pantalla");    
    var numero = parseFloat(x.val());
    x.val(numero*-1);
}

function borra()
{
    var x;
    x=$("#pantalla");
    x.val("0");
    introduciendo=0;
}

function pulsanumero(numero)
{
    var x;
    x=$("#pantalla");
    if(introduciendo ==1)
    {
         x.val(x.val() + numero);
    }
    else
    {
       x.val(numero); 
       introduciendo =1;
    }
}

function pulsadecimal()
{
    if(introduciendo==1 && comapuesta==0)
    {
        var x;
        x=$("#pantalla");    
        x.val(x.val() + ".");
        comapuesta=1;
    }
}

function igualsioperacion()
{
    if(operacion!=0)
    {
         pulsaigual();     
    }
}

function pulsasuma()
{
    igualsioperacion();
    operacion=1;
    recogevalor();
}

function recogevalor()
{
    var x;
    x=$("#pantalla");    
    numeroanterior = parseFloat(x.val());
    introduciendo =0;
    comapuesta=0;
}

function pulsaigual()
{
    var resultado;
    resultado = 0;
    var x;
    x=$("#pantalla");    
    switch(operacion)
    {
        case 1:
                resultado = numeroanterior + parseFloat(x.val());
                break;
        case 2:
                resultado = numeroanterior - parseFloat(x.val());
                break;
        case 3:
                resultado = numeroanterior * parseFloat(x.val());
                break;
        case 4:
                resultado = numeroanterior / parseFloat(x.val());
                break;
    }
    x.val(resultado);
    operacion = 0;
    introduciendo = 0;
    comapuesta = 0;
}

function pulsaresta()
{
    igualsioperacion();
    operacion = 2;
    recogevalor();
}

function pulsamultiplica()
{
    igualsioperacion();
    operacion = 3;
    recogevalor();
}

function pulsadivide()
{
    igualsioperacion();
    operacion = 4;
    recogevalor();
}

function pulsacancela()
{
    var x;
    x=$("#pantalla");    
    x.val('0');
    introduciendo = 0;
    comapuesta = 0;
    operacion = 0;
}

function pulsacero()
{
    pulsanumero(0);
}

function pulsauno()
{
    pulsanumero(1);
}

function pulsados()
{
    pulsanumero(2);
}

function pulsatres()
{
    pulsanumero(3);
}

function pulsacuatro()
{
    pulsanumero(4);
}

function pulsacinco()
{
    pulsanumero(5);
}

function pulsaseis()
{
    pulsanumero(6);
}

function pulsasiete()
{
    pulsanumero(7);
}

function pulsaocho()
{
    pulsanumero(8);
}

function pulsanueve()
{
    pulsanumero(9);
}
