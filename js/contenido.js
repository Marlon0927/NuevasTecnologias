function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML = contenido.innerHTML + '<p>' + texto + '</p>';
}

document.getElementById('imagen').onchange = function(evt) {
    var entradaArchivo = evt.target,
        archivos = entradaArchivo.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function() {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', imagen.result);
            etiquetaImg.setAttribute('width', '600px');
            etiquetaImg.setAttribute('height', '600px');
            var contenido = document.getElementById('contenido');
            contenido.appendChild(etiquetaImg);
        }
        imagen.readAsDataURL(archivos[0]);
    }
}

function imprimir(){
    var divContents = document.getElementById("contenido").innerHTML;
    var a = window.open('', '', 'height=100, width=800');
    a.document.write('<html>');
    a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    a.document.write('<body > <h1>Resultado</h1> <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
    }

    function nuevoTitulo() {
        var contenido = document.getElementById('contenido');
        var texto = document.getElementById("texto").value;
        contenido.innerHTML = contenido.innerHTML + '<h1>' + texto + '</h1>';
    }

    function nuevoEnlace() {
        var contenido = document.getElementById('contenido');
        var texto = document.getElementById("texto").value;
        var url = document.getElementById("url").value; // Obtener la URL
    
        var enlace = '<a href="' + url + '" target="_blank">' + texto + '</a>';
            contenido.innerHTML = contenido.innerHTML + '<p>' + enlace + '</p>';

        //if (texto && url) {
            // Crear el enlace
        //    var enlace = '<a href="' + url + '" target="_blank">' + texto + '</a>';
        //    contenido.innerHTML = contenido.innerHTML + '<p>' + enlace + '</p>';
       // } else {
       //     alert("Por favor ingresa tanto el texto como la URL para el enlace.");
       // }
    }
    
