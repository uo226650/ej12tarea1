/**
 * Se debe escribir una aplicación que use el API FILE de HTML5 
 * que cargue archivos desde la máquina cliente y que visualice sus 
 * propiedades (tamaño, tipo, etc.)
 */

class Lector {

  leerArchivoTexto(files) {
    //Solamente toma un archivo
    this.archivo = files[0];
    var nombre = document.getElementById("nombreArchivo");
    var tamaño = document.getElementById("tamañoArchivo");
    var tipo = document.getElementById("tipoArchivo");
    var ultima = document.getElementById("ultimaModificacion");
    var contenido = document.getElementById("contenidoArchivo");
    var errorArchivo = document.getElementById("errorLectura");
    nombre.innerText = "Nombre del archivo: " + this.archivo.name;
    tamaño.innerText = "Tamaño del archivo: " + this.archivo.size + " bytes";
    tipo.innerText = "Tipo del archivo: " + this.archivo.type;
    ultima.innerText = "Fecha de la última modificación: " + this.archivo.lastModifiedDate;
    contenido.innerText = "Contenido del archivo de texto:"
    
    //Solamente admite archivos de tipo texto
    var tipoTexto = /text.*/;
    var tipoJSON = "application/json";
    var tipoXML = "application/xml";//???? tipo text/xml
    if (this.archivo.type.match(tipoTexto) || this.archivo.type == tipoXML
          || this.archivo.type == tipoJSON) {
      this.muestraContenido();
    }
    else {
      errorArchivo.innerText = "El contenido de este archivo no se puede mostrar debido a su formato";
      document.getElementById("areaTexto").innerText = "";
    }
  }

  muestraContenido(){
    var lector = new FileReader();
    var areaVisualizacion = document.getElementById("areaTexto");
    lector.onload = function (evento) {
      areaVisualizacion.innerText = lector.result;
    }
    lector.readAsText(this.archivo);
  }
}

var lector = new Lector();