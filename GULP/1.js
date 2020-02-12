function genera() {
    //GUARDO TOTS ELS COLORS.
    var vermell = document.getElementById("vermell").checked;
    var taronja = document.getElementById("taronja").checked;
    var groc = document.getElementById("groc").checked;
    var verd = document.getElementById("verd").checked;
    var marro = document.getElementById("marro").checked;
    var lila = document.getElementById("lila").checked;
    var colors = new Array(); //CREO L'ARRAY DE COLORS QUE SERA ON GUARDARE ELS COLORS ESCOLLITS


    //COMPROVO QUINS COLORS HAN ESTAT ESCOLLITS I ELS GUARDO EN L'ARRAY DE COLORS.
    if (vermell) {
        colors.push("red");
    }

    if (taronja) {
        colors.push("orange");
    }

    if (groc) {
        colors.push("yellow");
    }

    if (verd) {
        colors.push("green");
    }

    if (marro) {
        colors.push("brown");
    }
    if (lila) {
        colors.push("purple");
    }

    var ncolors = colors.length; //MIRO EL NUMERO DE COLORS QUE HI HA.

    //GUARDO LES DIMENCIONS DE LA TAULA.
    var ampla = document.getElementById("num1").value;
    var altura = document.getElementById("num2").value;

    //CRIDO LA FUNCIO CREAR TAULA I LI PASO ELS VALORS QUE NECESITA.
    crearTaula(ampla, altura, colors, ncolors);


    //QUAN CLICKI EN UNA DE LES FLETXES DEL TECLAT AQUESTA FUNCIO RECULL UN NUMERO, DEPENENT DEL NUMERO QUE RECULLI, SERA UNA FLETXA O UNA ALTRE
    document.onkeydown = function(e) {
        if (e.keyCode == 37) {
            if (altura > 1) {
                altura = altura - 1;
                crearTaula(ampla, altura);
            }
        }
        if (e.keyCode == 38) {
            if (ampla > 1) {
                ampla = ampla - 1;
                crearTaula(ampla, altura);
            }
        }
        if (e.keyCode == 39) {
            if (altura < 25) {
                altura = altura * 1 + 1;
                crearTaula(ampla, altura);
            }
        }
        if (e.keyCode == 40) {
            if (ampla < 25) {
                ampla = ampla * 1 + 1;
                crearTaula(ampla, altura);
            }
        }
    }
}

//FUNCIO DE CREACIO DE TAULA.
function crearTaula(ampla, altura, colors, ncolors) {
    //CREO UNA TAULA I LI DONC  
    var table = document.createElement("table"); //CREOLA TAULA.
    table.setAttribute("ondblclick", "dclick()"); //POSOUN ATRIBUT DE ON DOBLUE CLICK SALTI LA FUNCIO DCLICK().

    table.setAttribute("id", "table"); //LI AFEGEIXO UN ATRIBUT DE ID.


    var color = 0;
    for (var i = 0; i < ampla; i++) //CREO UN BUCLE QUE VAGI CREANT ELS QUADRATS DE LA TAULA.
    {

        var tr = document.createElement("tr");
        table.appendChild(tr);

        for (var j = 0; j < altura; j++) //EN CADA QUADRAT LI POSO UNA ALTURA AMPLADA I COLOR
        {

            var td = document.createElement("td");
            td.setAttribute("style", "background-color:" + colors[color]);
            td.setAttribute("width", "30px");
            td.setAttribute("height", "30px");
            tr.appendChild(td);

            color++;
            if (color == ncolors) //EN CAS DE QUE JA HAGI CREAT UN QUADRAT AMB TOTS ELS COLORS TORNA A COMENÇAR.
            {
                color = 0;
            }

        }
    }

    if (document.getElementById("table") != null) //SI JA EXISTEIX LA TAULA LA ELIMINEM I LA RECARREGEM
    {
        var auxTabla = document.getElementById("table");
        table.setAttribute("ondblclick", "dclick()");
        document.body.replaceChild(table, auxTabla);
    } else document.body.appendChild(table);

}





function dclick() //AL FER DOBLE CLICK A LA TAULA ES FA UN CONFIRM QUE ASEGURA SI EL USUARI VOL ELIMINAR UNA COLUMNA O NO.
{
    if (confirm("Estas segur que vols eliminar una columna?") == true) {
        var amp = document.getElementById("num2").value - 1;
        alert(amp)
        if (amp > 1) {
            alert(amp);
            crearTaula(amp, altura, colors, ncolors);
        }
    } else {
        alert("No és pot eliminar més columnes.");
        return "";
    }

}