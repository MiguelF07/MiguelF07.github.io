function validateForm() {
    var x = document.forms["feedback"]["name2"].value;
    var y = document.forms["feedback"]["email2"].value;
    var z = document.forms["feedback"]["telefone2"].value;
    var a = document.forms["feedback"]["rating2"].value;
    var b = document.forms["feedback"]["mensagem2"].value;
    var i;
    var k;
    var controlo = 0;


    if(x!=="") {
        for(i=0; i<x.length;i++) {
            if(!x.charAt(i).match(letters)) {
                document.getElementById("divnome").style.display = "block";
                controlo=1;
            }
        }
        
        if(x.length<3) {
            document.getElementById("divnome").style.display = "block";
            controlo=1;
        }

        document.getElementById("divnome").style.display = "none";
        
    }
    else {
        document.getElementById("divnome").style.display = "block";
        controlo=1;
    }

    if((y.length<3) || (y.indexOf("@")) == -1 || (y.indexOf(".") == -1)) {
        document.getElementById("divemail").style.display = "block";
        controlo=1;
    }
    else {
        document.getElementById("divemail").style.display = "none";
    }
    if(z.length>9 || z.length<9) {
        document.getElementById("divtelefone").style.display = "block";
        controlo = 1;
    }
    else {
         //Está tudo mal
         for(k=0;k<z.length;z++) {
             if(!(isNaN(z.charAt(k))==false)) {
                 alert(hello);
                 controlo=1;
                 document.getElementById("divtelefone").style.display = "block";
             }
             else {
                 document.getElementById("divtelefone").style.display = "none";
             }
         }
     }
    if(a > 1 && a < 5) {
        document.getElementById("divavaliacao").style.display = "none";
    }
    else {
        document.getElementById("divavaliacao").style.display = "block";
        controlo = 1;
    }


    if(b.length<20) {
        document.getElementById("divmensagem").style.display = "block";
        controlo=1;
    }
    else {
        document.getElementById("divmensagem").style.display = "none";
    }

    if(controlo==1) {
        return false;
    }
    else {
        alert("A sua mensagem foi enviada. Responderemos o mais brevemente possível.")
    }

    
}