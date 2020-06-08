function validateForm() {
    var x = document.forms["contactos"]["name"].value;
    var y = document.forms["contactos"]["email"].value;
    var z = document.forms["contactos"]["assunto"].value
    var a = document.forms["contactos"]["mensagem"].value
    var i;
    var letters = /^[A-Za-z]+$/;
    var controlo=0;

    
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

    if(z.length=="") {
        document.getElementById("divassunto").style.display = "block";
        controlo=1;
    }
    else {
        document.getElementById("divassunto").style.display = "none";
    }

    if(a.length<20) {
        document.getElementById("divmensagem").style.display = "block";
        controlo=1;
    }
    else {
        document.getElementById("divmensagem").style.display = "none";
    }

    if(controlo==1) {
        document.getElementById("divsubmit").style.display = "none";
        return false;
    }
    else {
        document.getElementById("divsubmit").style.display = "block";
        alert("A sua mensagem foi enviada. Responderemos o mais brevemente possível.")
    }
}
