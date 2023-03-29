function verificar(){
    var mes = document.getElementById("select1");
    
    
    var valor = mes.options[mes.selectedIndex].text;
    document.write("el modelo seleccionado es  " + valor + " toyota");
    
    } 